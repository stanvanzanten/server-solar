var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Positie = require('../model/positie.model');

//
// Geef een lijst van alle posities.
//
routes.get('/positie', function(req, res) {
    res.contentType('application/json');
    Positie.find({})
        .then((posities) => {
            // console.log(films);
            res.status(200).json(posities);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/positie/:id', function(req, res) {   
    res.contentType('application/json');
    Positie.findById(req.params.id)
    .then((positie) => {
        // console.log(film);
            res.contentType('application/json');
            var id = req.params.id;
        res.status(200).json(positie);
    })
    .catch((error) => res.status(401).json(error));
    });

    routes.put('/positie/:id', function(req, res) {
        
        
            var update = { 
                "name" : req.body.name, 
                "description" : req.body.description,
                "hoeveelheid" : req.body.hoeveelheid
            };
            Positie.findById(id)
                .then( positie => {
                   positie.set(update);
                    positie.save();
                    res.status(200).json(positie);
                    
                })
                .catch((error) => res.status(401).json(error));
        });

        routes.post('/positie', function(req, res) {
            var new_positie = new Positie(req.body);
            new_positie.save(function(err, task) {
              if (err)
                res.send(err);
                res.json(task);
            });
        });

    routes.delete('/positie/:id', function(req, res) {
        var id = req.params.id;
    
        Positie.findById(id)
            .then(positie => { 
                positie.remove();
                res.status(200).send("Positie verwijderd");
            })
            .catch(error => res.status(401).json(error));
    });

module.exports = routes;