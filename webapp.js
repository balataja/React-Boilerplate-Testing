var express = require('express');
var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/api/bugs', function(req, res){
   console.log("Query string", req.query);
   var filter = {};
   if (req.query.priority){
       filter.priority = req.query.priority;
   }
   if (req.query.status){
       filter.status = req.query.status;
   }
   
   db.collection("bugs").find(filter).toArray(function(err, docs) {
       res.json(docs);
   })
});

app.post('/api/bugs', function(req, res, next){
    var newBug = req.body;
    db.collection("bugs").insertOne(newBug, function(err, result) {
        var newId = result.insertId;
        db.collection("bugs").find({_id: newId}).next(function(err, doc) {
            res.json(doc);
        })
    });
});

//MongoClient.connect('mongodb://localhost/bugsdb', function(err, dbconnection) {
//    db = dbconnection;
    var server = app.listen(3000, function(){
        var port = server.address().port;
        console.log('app listening on port', port);
    });
//});