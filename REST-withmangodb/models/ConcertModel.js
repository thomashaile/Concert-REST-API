const {Schema, model} = require('mongoose');

const concertSchema = Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    concert_date: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Concert', concertSchema);