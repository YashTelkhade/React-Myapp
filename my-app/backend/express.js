const express = require('express');
const app = express();

app.get('/', function(req, resp){
    resp.send('Hello World');
});

app.get('/users', function(req, resp){
    const id = req.query.id;
    resp.send('Users ' + id);
});

app.get('/users/:id', function(req, resp){
    const id = req.params.id;
    resp.send('Users ' + id);
});

app.listen(9000, function(req, resp){
    console.log("Running...")
});