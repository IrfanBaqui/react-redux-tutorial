var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var uuid = require("node-uuid");
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  var contentType = req.headers['content-type'];
  if (req.method === 'POST' && (!contentType || contentType.indexOf('application/json') === -1)) {
    return res.send(400);
  }
  next();
});

app.post('/posts/:id', function (req, res) {
  var postId = String(req.params.id);
  var vote = req.body;
  fs.readFile(__dirname + '/data.txt', 'utf8', function(err, data) {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    }

    data = JSON.parse(data);
    var result = data['posts'][postId];
    if (!result) {
      res.statusCode = 404;
      res.send('Post does not exist');
    } else {
      res.statusCode = 200;
      vote.vote == 'upVote' ? data['posts'][postId]['votes']++ : data['posts'][postId]['votes']--;

      data = JSON.stringify(data);
      fs.writeFile(__dirname + '/data.txt', data, function() {
      setInterval(function(){
        res.end(postId);
      }, 200);
    })
    }
  });
});

app.get('/posts/:id', function (req, res) {
  var postId = String(req.params.id);
  fs.readFile(__dirname + '/data.txt', 'utf8', function(err, data) {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    }

    data = JSON.parse(data);
    var result = data['posts'][postId];
    if (!result) {
      res.statusCode = 404;
      res.send('Post does not exist');
    } else {
      res.statusCode = 200;
      res.send(JSON.stringify(result));
    }
  });
});

app.get('/posts', function (req, res) {
  fs.readFile(__dirname + '/data.txt', 'utf8', function(err, data) {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    }
    res.send(data);
  });
});

app.post('/post', function (req, res) {
  var post = req.body;
  var id = uuid.v4();

  fs.readFile(__dirname + '/data.txt', 'utf8', function(err, data) {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    }

    data = JSON.parse(data);
    data['posts'][id] = post;
    data['posts'][id]['postId'] = id;
    data = JSON.stringify(data);

    fs.writeFile(__dirname + '/data.txt', data, function() {
      setInterval(function(){
        res.end(id);
      }, 500);
    })
  });
});


var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port)

});