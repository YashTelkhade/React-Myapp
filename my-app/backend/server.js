const express = require('express');
const app = express();
const mongoose = require('mongoose');
// require('dotenv').config();
const port = 5000 | process.env.PORT;

const cors = require('cors');
app.use(cors());

//process.env.ATLAS_URI
const uri = 'mongodb://127.0.0.1:27017/customers';
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb connection established');
})

const customerRoute = require('./routes/customers');

app.use(express.urlencoded());
app.use(express.json());

app.use('/customers', customerRoute);
// app.use(app.router);
// customerRouter.initialize(app);

app.get('/', function(req, resp){
    resp.send('Hello World');
});

// app.get('/users', function(req, resp){
//     const id = req.query.id;
//     resp.send('Users ' + id);
// });

// app.get('/users/:id', function(req, resp){
//     const id = req.params.id;
//     resp.send('Users ' + id);
// });

app.listen(5000, function(req, resp){
    console.log("Running...")
});