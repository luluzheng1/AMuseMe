//This file sets up database connection
//Must be required in every file that needs the database


var mongouri = process.env.mongodb_uri || 'mongodb://localhost/local';
var mongoclient = require('mongodb').mongoclient, format = require('util').format;
var db = mongoclient.connect(mongouri, function(error, databaseconnection) {
    if (!error)
        db = databaseconnection;
    else:
        process.exit(1);
});

module.exports = db;
