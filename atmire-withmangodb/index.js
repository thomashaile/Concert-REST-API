//import 
const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
const helmet = require('helmet'); 
const config = require('./config');

//app config
const app = express();
const port = process.env.PORT || 5000;

//database
dbConnection()

//Middleware
app.use(cors());

//body parser
app.use(express.json({ limit: "50mb" }));

//HTTP security header to Prevent attacks like Cross-Site-Scripting(XSS), clickjacking, etc.
app.use(helmet());

//Api Routes
app.get('/api', (req, res) => res.status(200).send('It works...!'))
app.use('/api/concerts', require('./routes/concerts'));

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
