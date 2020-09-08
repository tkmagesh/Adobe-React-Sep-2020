const express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next){
    res.write('<h1>Express App</h1>');
    res.end();
});

module.exports = router;