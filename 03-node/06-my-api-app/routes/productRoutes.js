const express = require('express'),
    router = express.Router();

const products = [
    { id: 101, name: 'Pen', cost: 10, units: 100 },
    { id: 102, name: 'Pencil', cost: 5, units: 500 },
    { id: 103, name: 'Marker', cost: 50, units: 50 },
    { id: 104, name: 'Scribble Pad', cost: 30, units: 50 },
];

router.get('/', function(req, res, next){
    res.json(products);
});

router.get('/:id', function(req, res, next){
    const pid = parseInt(req.params.id),
        product = products.find(p => p.id === pid);
    if (product){
        return res.json(product);
    }
    next();
});

module.exports = router;