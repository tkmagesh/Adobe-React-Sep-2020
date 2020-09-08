const http = require('http');
const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');

const app = express();
const productsRoutes = require('./routes/productRoutes');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/products', productsRoutes);

app.use(function(req, res, next){
    res.status(404).end();
});

const server = http.createServer(app);
server.listen(8080);
server.on('listening', () => console.log(chalk.yellow('Server listening on port 8080')));