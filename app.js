const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/books');
const port = process.env.PORT || 8976;

const Book = require('./models/bookModel');

const bookRouter = express.Router();

//routes

bookRouter.route('/books').get((req, res) => {
  const  query  = {};

  if(req.query.genre){
    query.genre = req.query.genre;
  }

  Book.find(query,(err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });
});


bookRouter.route('/books').get((req, res) => {
  const query = {};

  if (req.query.genre) {
    query.genre = req.query.genre;
  }

  Book.find(query, (err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });
});

bookRouter.route('/books/:bookId').get((req, res)=>{

 Book.findById(req.params.bookId,(err,book)=>{
   if(err){
     return res.send(err);
   }
   return res.json(book);
 })

})

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello APi');
});

app.listen(port, () => {
  console.log(`running app on port ${port}`);
});
