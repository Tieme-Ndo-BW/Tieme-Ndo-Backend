const express = require('express');
const server = express();
require("dotenv").config();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 4000;


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));


server.get('/', (req,res) => {
    res.status(200).json({ message: "It's working!!!"})
});

server.listen(port, () => console.log(`*** Running on port ${port}***`));

module.exports = server;