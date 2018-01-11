const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    title: String,
    recipes: [{
        name: String,
        ingredients: [{
            name: String,
            weight: Number,
            price: String
        }]
    }]
}, {
    timestamps: true
});


const User = mongoose.model('user', UserSchema);

// Add a 'dummy' user (every time you require this file!)
const user = new User({
    name: 'Joe',
    title: 'Mr.',
    recipes:[
        { name: 'Pasta',ingredients: [{name: 'Tomaten', weight: 200, price: '1,50'}]},
        { name: 'Pizza', ingredients: [{ name: 'Cheese', weight: 300, price: '2,00'}]}
    ]
});//.save();

module.exports = User;