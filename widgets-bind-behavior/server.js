var express = require('express');
// var optimizer = require('optimizer');
var port = 8080;
var serveStatic = require('serve-static');

var app = express();
app.use('/static', serveStatic(__dirname + '/static'));
app.get('/', require('./src/pages/index'));

app.listen(port, function() {
    console.log('Listening on port %d', port);

    if (process.send) {
        process.send('online');
    }
});