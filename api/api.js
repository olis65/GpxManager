'use strict';

const express = require('express'),
    contentType = require('content-type'),
    accepts = require('accepts'),
    bodyParser = require('body-parser');

const db = require('./openDbConnection.js').db,
    Track = require('./schemas').Track;

var router = express.Router();
router.use(bodyParser.json({ type: 'application/json' }));

function findTracks(req, res, next) {
    Track
        .find({})
        .limit(10)
        .skip(0)
        .exec(function (err, track_docs) {
            if(err) {
                console.log(err);
                res.statusCode = 500;
                res.json({ errors: [err]});
            }
            req.tracks = track_docs;
            next();
        });
}

function findTrackByTrackId(req, res, next) {
    var trackId = req.params.id;

    Track
        .find({track_id: trackId})
        .exec(function (err, track_doc) {
            if(err) {
                console.log(err);
                res.statusCode = 500;
                res.json({ errors: [err]});
            }
            req.track = track_doc;
            next();
        });
}

router.get("/", findTracks, function (req, res) {

    console.log(req.tracks[0]);

    var accept = accepts(req);
    switch (accept.type(['json', 'xml/gpx'])) {
        case 'xml/gpx':
            res.statusCode = 500;
            res.send("Get track with 'accept: gpx' not implemented jet");
            break;
        case 'json':
        default:
            res.send("API GET ALL DEFAULT(JSON)");
            break;
    }
});

router.get("/:id", findTrackByTrackId, function(req, res) {
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