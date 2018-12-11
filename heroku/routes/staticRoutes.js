path = require('path')

module.exports = function(app) {
app.get(['/', '/homepage.html'], (req, res) => {
   res.sendFile(path.join(__dirname, '../src/html/homepage.html'));    
});

app.get('/genre.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/genre.html'));
});

app.get('/play.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/play.html'));
});
app.get('/stats.html', (req, res) => {

    res.sendFile(path.join(__dirname, '../src/html/stats.html'));
});
};