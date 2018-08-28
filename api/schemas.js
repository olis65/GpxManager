'use strict';

var mongoose = require('mongoose');

var trackSchema = new mongoose.Schema({
    track_id: {
        type: String,
        required: [true, "Each track need a unique id"],
        unique: true //Index
    },
    name: {
        type: String,
        required: [true, "Each route needs a short name"],
        maxlength: 80,
        index: true
    },
    description: {
        type: String,
        default: "",
        maxlength: 10000
    },
    tags: {
        type: [String],
        default: []
    },
    date_recorded: {
        type: Date,
        required: true,
        index: true
    },
    points: {
        type: [{ele: Number, lat: Number, lon: Number, time: Date}]
    }
});

var Track = mongoose.model('raw_track', trackSchema);

module.exports.trackSchema = trackSchema;
module.exports.Track = Track;