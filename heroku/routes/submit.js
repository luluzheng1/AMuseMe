//Defines the route for the submit api which writes the information
//to the database

//set up database connection
var express = require("express");
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/local';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
    if (!error)
        db = databaseConnection;
    else
        process.exit(1);
});


module.exports = function(app) {
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/submit', (req, res) => {
    console.log(req.body)
    var username = req.body.username;
    var score = req.body.score;
    var genre = req.body.genre;
    var num_wrong = req.body.nwrong;
    var created_at = new Date().toISOString();    
    var toInsert ={
        "username": username,
        "score": score,
        "num_wrong": num_wrong,
        "genre": genre,
        "created_at": created_at
    };

    db.collection('quizScores', function(error, coll) {
        coll.insert(toInsert, function(error, saved) {
            if (error) 
                res.send(500);
            else
                //We can display a table of high scores using pug
                //or send data back as json to static page for display
                retObject = {
                    "success" : "Database has been updated",
                    "status": 200,
                    "data": toInsert
                };
                res.send(JSON.stringify(retObject));
        });
});

});
app.get('/history',(req, res) =>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS"); 
    res.header("Access-Control-Allow-Headers","X-Requested-With");

    console.log("get history");
    db.collection('quizScores', function(error, coll) 
    {
        coll.find().toArray( function(error, results) 
        {
            if(error)
                res.send(500);
            else
                res.send(results);
    // res.send([{
    //     username: "haha",
    //     score: 43,
    //     whatever: "jhhw"
    // },
    // {
    //     username: "sdjh",
    //     score: 79,
    //     whatever: "kjd"
    // },
    // {
    //     username: "fewjbdsa",
    //     score: 7899,
    //     whatever: "kjd"
    // },
    // {
    //     username: "dwkjjqw",
    //     score: 71029,
    //     whatever: "kjd"
    // }
    // ]);
            console.log("done");
        });
    });
});
}
