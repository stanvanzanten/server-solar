

var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Omvormer = require('../model/omvormer.model');

//
// Geef een lijst van alle omvormers.
//
routes.get('/omvormer', function(req, res) {
    res.contentType('application/json');
    Omvormer.find({})
        .then((omvormers) => {
            // console.log(films);
            res.status(200).json(omvormers);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/omvormer/:id', function(req, res) {   
    res.contentType('application/json');
    Omvormer.findById(req.params.id)
    .then((omvormer) => {
        // console.log(film);
            res.contentType('application/json');
            var id = req.params.id;
        res.status(200).json(omvormer);
    })
    .catch((error) => res.status(401).json(error));
    });

    routes.put('/omvormer/:id', function(req, res) {
        
        
            var update = { 
                "name" : req.body.name, 
                "description" : req.body.description,
                "hoeveelheid" : req.body.hoeveelheid
            };
            Omvormer.findById(id)
                .then( omvormer => {
                   omvormer.set(update);
                    omvormer.save();
                    res.status(200).json(omvormer);
                    
                })
                .catch((error) => res.status(401).json(error));
        });

        routes.post('/omvormer', function(req, res) {
            var new_omvormer = new Omvormer(req.body);
            new_omvormer.save(function(err, task) {
              if (err)
                res.send(err);
                res.json(task);
            });
        });

    routes.delete('/omvormer/:id', function(req, res) {
        var id = req.params.id;
    
        Omvormer.findById(id)
            .then(omvormer => { 
                omvormer.remove();
                res.status(200).send("Omvormer verwijderd");
            })
            .catch(error => res.status(401).json(error));
    });

module.exports = routes;