/* eslint disabled no-params-reassign */
const express = require('express');

function route(Book){
  const bookRouter = express.Router();
bookRouter.route('/books')
  .get((req, res) => {
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
  })
  .post((req, res) => {
    const book = new Book(req.body);
    console.log(book);
    book.save();
    res.status(201).json(book);
  });

bookRouter.route('/books/:bookId').get((req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      return res.send(err);
    }
    return res.json(book);
  });
})
.put((req, res)=>{
  Book.findById(req.params.bookId,(err,book)=>{
    if(err){
      res.send(err);
    }
    book.title = req.body.title;
    book.author = req.body.author;
    book.gener = req.body.gener;
    book.read = req.body.read;
    book.save();
    return res.json(book);
  });
});


return bookRouter;


}

module.exports = route;