const http = require('http');
const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');

const app = express();

const products = [
    {id : 101, name : 'Pen', cost : 10, units : 100 },
    { id: 102, name: 'Pencil', cost: 5, units: 500 },
    { id: 103, name: 'Marker', cost: 50, units: 50 },
    { id: 104, name: 'Scribble Pad', cost: 30, units: 50 },
];


app.use(logger('dev'));
app.use(express.urlencoded());
app.use(express.json());

app.use(function(req, res, next){
    if (req.url === '/products'){
        res.json(products);
    } else {
        next();
    }
});

app.use(function(req, res, next){
    res.status(404).end();
});

const server = http.createServer(app);
server.listen(8080);
server.on('listening', () => console.log(chalk.yellow('Server listening on port 8080')));