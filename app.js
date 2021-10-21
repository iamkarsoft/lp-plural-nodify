const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const db = mongoose.connect('mongodb://localhost/books');
const port = process.env.PORT || 8976;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const Book = require('./models/bookModel');

const bookRouter = express.Router();

//routes

bookRouter.route('/books')
.get((req, res) => {
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
})
.post((req, res) =>{
  const book = new Book(req.body);
  console.log(book);
  book.save()
  res.status(201).json(book);
})
;

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
