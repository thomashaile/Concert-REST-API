const mongoose = require('mongoose');
const config = require('./config');
require('dotenv').config();

const dbConnection =  async () => {
     try {
        await mongoose.connect(process.env.DB_CNN || config.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('DB online')
     } catch (error) {
        throw new Error('Error connecting to database');
        console.log(error);
     }
};

module.exports = {
    dbConnection
};
