var express = require('express');
var router = express.Router();
const users = require('../models/users');
const books = require('../models/books');

/* GET users listing. */
router.get('/userList', function(req, res, next) {
  users.find({})
    .then( user =>{
      //console.log(343434343434);
      res.send(user);
    })
    .catch( err =>{
      console.log(err);
    });
  //const allUsers = users.find();
  //console.log(allUsers);
  //res.send('respond with a resource');
});

/* GET books listing. */
router.get('/bookList', function(req, res, next) {
  books.find({})
    .then( user =>{
      //console.log(123123123123);
      res.send(user);
    })
    .catch( err =>{
      console.log(err);
    });
  //const allUsers = users.find();
  //console.log(allUsers);
  //res.send('respond with a resource');
});

/* ADD books listing. */
router.post('/bookList', function(req, res, next) {
   // create a new book
   const newBook = new books({
    title: req.body.title,
    isbn: req.body.isbn,
    pageCount: req.body.pageCount,
    publishedDate: req.body.publishedDate,
    thumbnailUrl: req.body.thumbnailUrl,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    status: req.body.status,
    authors: req.body.authors,
    categories: req.body.categories
  });

  // save to database
  newBook.save()
    .then(book => {
      res.json({
        message: "Successfully added the book!",
        book: book
      }) 
    })
    .catch(err => {
        console.error("Error saving book:", err);
        res.send("Error saving book");
    });
});

/* Delete books from bookstores collection. */
router.delete('/bookList/:bookName', function(req, res, next){
  books.deleteOne({ title: req.params.bookName })
    .then(result => {
      if (result.deletedCount > 0) {
        res.status(200).json({ 
          message: "Successfully deleted the book!",
          book: `${req.params.bookName}` 
        });
      } 
      else{
        res.status(404).send({ message: `Book '${req.params.bookName}' not found.` });
      }
    })
    .catch(err => {
      console.error("Error deleting book:", err);
      res.status(500).send({ message: "Error deleting book" });
    });
});
module.exports = router;
