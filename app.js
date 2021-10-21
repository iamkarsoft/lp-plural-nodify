const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/books');
const port = process.env.PORT || 8976;

const Book = require('./models/bookModel');

const bookRouter = express.Router();


//routes

bookRouter.route('/books')
  .get((req, res)=>{
    Book.find((err, books) => {
      if(err){
       return  res.send(err);
      }
      return res.json(books);
    });
  });
    
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello APi');
});

app.listen(port, () => {
  console.log(`running app on port ${port}`);
});