const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const OmvormerSchema = new Schema({
    id: String,
    name: String,
    hoeveelheid: Number
    // locatie: [{type: mongoose.Schema.Types.ObjectId,
    //     ref: 'locatie'}]
});

const Omvormer = mongoose.model('omvormer', OmvormerSchema);

const omvormer1 = new Omvormer({
    name: 'Breda',
    hoeveelheid: 25,
});//.save();

module.exports = Omvormer;