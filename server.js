//var http = require('http');
var fs = require('fs');
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '001.html'));
});

app.get('/ui/xplsn.gif', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'xplsn.gif'));
});

app.get('/ui/explsn.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'explsn.mp3'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/001.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '001.html'));
});

app.get('/ui/b.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/bcg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bcg.png'));
});
var votes = [];

app.get('/votes', function (req, res) {
  res.send(JSON.stringify(votes));
});

app.get('/browser', function (req, res) {
  res.send(req.headers['user-agent']);//header('X-Forwarded-For'));// || req.connection.remoteAddress);
});

app.get('/vote/yes', function (req, res) {
  votes.push(req.headers['user-agent']);
  res.send(JSON.stringify(votes));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
