const express = require('express');

function route(Book){
  const bookRouter = express.Router();
bookRouter.route("/books")
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

bookRouter.route("/books/:bookId").get((req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      return res.send(err);
    }
    return res.json(book);
  });
});


return bookRouter;


}

module.exports = route;