const express = require('express');
const bodyParser = require('body-parser');
promotionsRouter.use(bodyParser.json());
promotionIdRouter.use(bodyParser.json());
const Promotion = require('../models/promotion');



app.get('/promotions', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/promotions', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/promotions', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/promotions', (req, res) => {
    res.end('Deleting all campsites')
});

promotionRouter.route('/promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

app.get('/promotions/:promotionId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/promotions/:promotionId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/promotions/:promotionId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/promotions/:promotionId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});


module.exports = promotionRouter;