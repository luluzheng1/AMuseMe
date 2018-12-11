const express = require('express');
const path = require('path');
var cors = require('cors');
var fs = require('fs');

const PORT = process.env.PORT || 5000


var app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'src')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//get all of our routes from separate directory
//https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express/37309212#37309212
//TODO: does anyone know how to filter this so it only takes files
//that END in .js? For example submit.js.swp is detected by this and breaks the server.
//
function getRoutes(folderName, file) {
    fs.readdirSync(folderName).forEach(function(file) {

        var fullName = path.join(folderName, file);
        var stat = fs.lstatSync(fullName);

        if (stat.isDirectory()) {
            getRoutes(fullName);
        } else if (file.toLowerCase().indexOf('.js')) {
            require('./' + fullName)(app);
            console.log("require('" + fullName + "')");
        }
    });
}

getRoutes('routes');
 
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
