const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocatieSchema = new Schema({
    name: String,
    description: String,
}, {
    timestamps: true
});


const Locatie = mongoose.model('locatie', LocatieSchema);

// Add a 'dummy' voorstelling (every time you require this file!)
const locatie = new Locatie({
    name: 'Breda',
    description: 'Lovendijkse straat, Breda'
});//.save();

module.exports = Locatie;