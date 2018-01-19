const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const PositieSchema = new Schema({
    id: String,
    name: String,
    description: String,
    hoeveelheid: Number
    // locatie: [{type: mongoose.Schema.Types.ObjectId,
    //     ref: 'locatie'}]
});

const Positie = mongoose.model('positie', PositieSchema);

const positie1 = new Positie({
    name: 'omvormer 1 Oosterhout',
    description: 'Opbrengst in KW',
    hoeveelheid: 340,
})//.save();

module.exports = Positie;