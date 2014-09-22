var express = require('express');
var compression = require('compression');
var serveStatic = require('serve-static');
var dust = require('dustjs-linkedin');
var marko = require('marko');
var viewEngine = require('view-engine');

// Configure the RaptorJS Optimizer
require('optimizer').configure({
    plugins: [
        'optimizer-marko',
        'optimizer-dust',
        'optimizer-less'
    ]
});

viewEngine.register('dust', require('view-engine-dust'), { dust: dust });

// Enable the helpers for Dust
require('optimizer/dust').registerHelpers(dust);


var app = express();

var port = 8080;

app.use(compression()); // Enable gzip compression for all HTTP responses
app.use('/static', serveStatic(__dirname + '/static'));

app.get('/', require('./src/pages/index'));
app.get('/dust', require('./src/pages/dust'));

app.listen(port, function() {
    console.log('Listening on port %d', port);
});
