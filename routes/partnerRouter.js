const express = require('express');
const bodyParser = require('body-parser');
const partnerRouter = express.Router();
const partnerIdRouter = express.Router();
const Partner = require('../models/partner');

partnerIdrouter.use(bodyParser.json());
partnerRouter.use(bodyParser.json());

partnerRouter.route('/partners')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})


app.get('/partners', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/partners', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/partners', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/partners', (req, res) => {
    res.end('Deleting all campsites')
});

partnerIdRouter.route('/partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

app.get('/partners/:partnerId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/partners/:partnerId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/partners/:partnerId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/partners/:partnerId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});


module.exports = partnerRouter;