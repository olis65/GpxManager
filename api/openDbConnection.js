'use strict';

const MONGO_URL = 'localhost',
    DB_NAME = 'track_db';


var mongoose = require('mongoose');
mongoose.connect(`mongodb://${MONGO_URL}/${DB_NAME}`,  {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to mongodb")
});

module.exports.db = db;