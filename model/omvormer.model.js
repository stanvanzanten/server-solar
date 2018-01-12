const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const OmvormerSchema = new Schema({
    id: String,
    name: String,
    description: String,
    hoeveelheid: Number
    // locatie: [{type: mongoose.Schema.Types.ObjectId,
    //     ref: 'locatie'}]
});

const Omvormer = mongoose.model('omvormer', OmvormerSchema);

const omvormer1 = new Omvormer({
    name: 's Hertogdenbosch',
    description: 'Opbrengst in KW',
    hoeveelheid: 225,
})//.save();

module.exports = Omvormer;