

var trackSchema = new mongoose.Schema({
    track_id: {
        type: [String, ""],
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
        type: [[Number, Number]]
    }
});

var Track = mongoose.model('Track', trackSchema);

module.exports.trackSchema = trackSchema;
module.exports.Track = Track;