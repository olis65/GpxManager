MONGO_URL = 'localhost';
COLLECTION_NAME = 'raw_tracks';


var mongoose = require('mongoose');
mongoose.connect(`mongodb://${MONGO_URL}/${COLLECTION_NAME}`,  {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to mongodb")
});

module.exports.db = db;