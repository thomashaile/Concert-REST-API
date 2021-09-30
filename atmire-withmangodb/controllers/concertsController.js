const concert = require('../models/ConcertModel');

const concertsController = {
    // @route GET api/concerts
    // @description Get all concerts
    // @access Public
    getAllConcerts: (req, res) => {
        concert.find()
            .then(concerts => res.json(concerts))
            .catch(err => res.status(404).json({ nocencertfound: 'No Concert found' }));
    },

    // @route GET api/concerts/:id
    // @description Get single concert by id
    // @access Public
    getOne: (req, res) => {
        concert.findById(req.params.id)
            .then(concert => res.json(concert))
            .catch(err => res.status(404).json({ noconcertfound: 'No Concert found' }));
    },

    // @route GET api/concerts/new
    // @description add/save concert
    // @access Public
    create: (req, res) => {
        concert.create(req.body)
            .then(concert => res.json({ msg: 'Concert added successfully' }))
            .catch(err => res.status(400).json({ error: 'Unable to add this concert' }));
    },

    // @route GET api/concerts/:id
    // @description Update concert
    // @access Public
    update: (req, res) => {
        concert.findByIdAndUpdate(req.params.id, req.body)
            .then(concert => res.json({ msg: 'Concert Updated successfully' }))
            .catch(err => res.status(400).json({ error: 'Unable to update the Database' }));
    },

    // @route GET api/concerts/:id
    // @description Delete concert by id
    // @access Public
    delete: (req, res) => {
        concert.findByIdAndRemove(req.params.id, req.body)
            .then(concert => res.json({ mgs: 'Concert deleted successfully' }))
            .catch(err => res.status(404).json({ error: 'No such a concert' }));
    }
}

module.exports = concertsController; 

