'use strict';

const express = require('express'),
    contentType = require('content-type'),
    accepts = require('accepts'),
    bodyParser = require('body-parser');

const db = require('./openDbConnection.js').db;

var router = express.Router();
router.use(bodyParser.json({ type: 'application/json' }));

router.get("/", function (req, res) {

    var accept = accepts(req);
    switch (accept.type(['json', 'xml/gpx'])) {
        case 'xml/gpx':
            res.statusCode = 500;
            res.send("Get track with 'accept: gpx' not implemented jet");
            break;
        case 'json':
        default:
            res.send("API GET DEFAULT(JSON)");
            break;
    }
});

router.get("/:id", function(req, res) {
    var trackId = req.params.id;

    var accept = accepts(req);
    switch (accept.type(['json', 'xml/gpx'])) {
        case 'xml/gpx':
            res.statusCode = 500;
            res.send("Get track with 'accept: gpx' not implemented jet");
            break;
        case 'json':
        default:
            res.send("API GET DEFAULT(JSON)");
            break;
    }
});

router.post("/", function (req, res) {
    var ct = contentType.parse(req);

    if(!ct || ct.type === "application/json") {
        res.send("post track json")
    }
    res.send(`post track with unknown content type (${ct.type})`)
});

router.put("/:id", function (req, res) {
    res.send("put track")
});

router.delete("/:id", function (req, res) {
    res.send("delete track")
});

module.exports = router;