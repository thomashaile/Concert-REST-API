'use strict'

const fs = require('fs');
const path = require('path');
const config = require('../config');
const util = require('util');
const concerts = require("../data/concerts.json");
//file path
const DATA_DIR = path.join(__dirname, "/..", config.DATA_DIR, "/concerts.json");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const controllers = {
    // @route GET api/concerts
    // @description Get all concerts
    // @access Public
    concerts: async(req, res) => {
        try {
            const concertLists = await readFile(DATA_DIR, 'utf-8');
            console.log("concerts", concertLists);
            return await res.send(JSON.parse(concertLists)); //list all concerts
        } catch {
            return await res.json({ status: 'error', message: 'Something went wrong...' });
        };
    },
    // @route GET api/concerts/:id
    // @description Get single concert by id
    // @access Public
    singleConcert: async(req, res) => {
        try {
            const concertList = await readFile(DATA_DIR, "utf-8");
            const parsedConcert = JSON.parse(concertList);
            let concert = parsedConcert.find(c => c.id === JSON.parse(req.params.id));
            if (!concert) return res.status(404).send('The concert with the given ID was not found');
            return res.json({ status: "Ok", concert });
        } catch {
            return await res.json({ status: 'error', message: 'Something went wrong...' });
        };
    },
    // @route GET api/concerts/new
    // @description add/save concert
    // @access Public
    addConcert: async(req, res) => {
        const concertName = req.body.title;
        try {
            const concertList = await readFile(DATA_DIR, "utf-8");
            const parsedConcert = JSON.parse(concertList);
            const concert = {
                id: parsedConcert.length + 1,
                title: concertName,
                artist: req.body.artist,
                venue: req.body.venue,
				concert_date: req.body.date
            };
            concerts.push(concert);
            //console.log("concert");
            let objToString = JSON.stringify(concerts);
            await writeFile(DATA_DIR, objToString);
            return await res.redirect(303, '/api/concerts');
        } catch {
            return await res.json({ status: 'error', message: 'Something went wrong...' });
        };
    },
    // @route GET api/concerts/:id
    // @description Update concert
    // @access Public
    updateConcert: async(req, res) => {
        const newTitle = req.body.title;
        try {
            const concertList = await readFile(DATA_DIR, "utf-8");
            const parsedConcert = JSON.parse(concertList);
            let concert = parsedConcert.find(c => c.id === JSON.parse(req.params.id));
            if (!concert) return res.status(404).send('The concert with the given ID was not found');
            concert.title = newTitle;
            concert.artist = req.body.artist;
            concert.venue = req.body.venue;
			concert.concert_date = req.body.date;
            concerts.push(concert);
            let objToString = JSON.stringify(parsedConcert);
            await writeFile(DATA_DIR, objToString);
            console.log(objToString);
            res.status(200).send('concert updated successfully ...');
        } catch {
            return await res.json({ status: 'error', message: 'Something went wrong...' });
        };
    },
    // @route GET api/concerts/:id
    // @description Delete concert by id
    // @access Public
    deleteConcert: async(req, res) => {
        try {
            const concertList = await readFile(DATA_DIR, "utf-8");
            const parsedConcert = JSON.parse(concertList);
            let concert = parsedConcert.find(c => c.id === JSON.parse(req.params.id));
            if (!concert) return res.status(404).send('The concert with the given ID was not found');
            let index = parsedConcert.indexOf(concert);
            parsedConcert.splice(index, 1);
            let objToString = JSON.stringify(parsedConcert);
            await writeFile(DATA_DIR, objToString);
            res.status(200).send('Concert Deleted Successfully ...');
        } catch {
            return await res.json({ status: 'error', message: 'Something went wrong...' });
        };
    }

};

module.exports = controllers;