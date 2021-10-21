const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const db = mongoose.connect('mongodb://localhost/books');
const port = process.env.PORT || 8976;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const Book = require('./models/bookModel');

const bookRouter = require('./routes/bookRouter')(Book) ;

//routes



app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello APi');
});

app.listen(port, () => {
  console.log(`running app on port ${port}`);
});
