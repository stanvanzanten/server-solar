var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Locatie = require('../model/locatie.model');

//
// Geef een lijst van alle zalen.
//
routes.get('/locaties', function(req, res) {
    res.contentType('application/json');
    Locatie.find({})
        .then((locaties) => {
            res.status(200).json(locaties);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/locaties/:id', function(req, res) {
    res.contentType('application/json');
    Locatie.findById(req.params.id)
        .then((locatie) => {
            res.status(200).json(locatie);
        })
        .catch((error) => res.status(401).json(error));
});

routes.delete('/locaties/:id', function(req, res) {
    var id = req.params.id;

    Locatie.findById(id)
        .then(locatie => { 
            locatie.remove();
            res.status(200).send("locatie verwijderd");
        })
        .catch(error => res.status(401).json(error));
});
routes.post('/locaties', function(req, res) {
    var new_locatie = new Locatie(req.body);
    new_locatie.save(function(err, task) {
      if (err)
        res.send(err);
        res.json(task);
    });
});

routes.put('/locatie/:id', function(req, res) {
    
        res.contentType('application/json');
        var id = req.params.id;
    
        var update = { 
            "name" : req.body.name, 
            "description" : req.body.description,
        };
        Locatie.findById(id)
            .then( locatie => {
                locatie.set(update);
                locatie.save();
                res.status(200).json(locatie);
                
            })
            .catch((error) => res.status(401).json(error));
});

module.exports = routes;