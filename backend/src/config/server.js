const port = 3003

const bodyParser = require('body-parser'); //parser no copo da req pra entregar obj
const express = require('express'); //retorna singleton
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({ extended: true })); //para toda requisição que chegar use o body parser para interpretar quando vinher no formato urlencoded
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND IS RUNNING ON PORT ${port}`);
})

module.exports = server;