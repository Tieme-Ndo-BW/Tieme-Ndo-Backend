const express = require('express');
const server = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const clientRouter = require('./api/routers/client-router');

const port = process.env.PORT || 4000;


server.use(express.json());
server.use(helmet());
server.use(cors({credentials: true}));
server.use(morgan('dev'));
server.use('/api/clients', clientRouter);


server.get('/', (req,res) => {
    res.status(200).json({ message: "It's working!!!"})
});

server.listen(port, () => console.log(`*** Running on port ${port}***`));

module.exports = server;