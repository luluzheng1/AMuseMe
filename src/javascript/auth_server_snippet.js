var request = require("request");
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

var app = express();


// app.get('/credential', function(req, res) {

//     var xhr = new xmlhttprequest();
//     xhr.open('POST', 'accounts.spotify.com/api/token');
//     xhr.responseType = 'json';
//     console.log(xhr);
//     xhr.setRequestHeader('Authorization', 'Basic efa771d3b7fb42deb7936dbf833141f8:cbeb9c6e4dbf4db0ba252158d1ae27eb');
//     xhr.onreadystatechange = function() {
//         console.log(this.readyState);
//         if (this.readyState == 4) {
//             var response = this.response;
//             console.log(this.responseText);
//         }
//     };
//     xhr.send();
// });
app.get('/credential', function(req, res) {
    const client_id = 'efa771d3b7fb42deb7936dbf833141f8';
    const client_secret = 'cbeb9c6e4dbf4db0ba252158d1ae27eb';

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var options = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret)).toString('base64')
        },
        form: {
            'grant_type': 'client_credentials'
        },
        json: true
    };

    var callback = function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.stringify(body));
            return;
        }
        else if (error) {
            console.error(error);
            return;
        }
        else 
            console.log(response.statusCode);
    }

    request.post(options, callback);
});

app.listen(PORT, () => console.log(`listening on ${ PORT }`));