const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /stored/book
    storedBooks(req, res, next) {
        Book.find({})
            .then((books) => {
                res.render('me/stored-books', {
                    books: multipleMongooseToObject(books),
                })
            })
            .catch(next);
    }

    // [GET] /about
    about(req, res, next) {
        res.render('me/about');
    }

    // [GET] /logout
    logOut(req, res, next) {
        res.render('me/log-out');
    }

    // [GET] /trash/books
    trashBooks(req, res, next) { 
        Book.findWithDeleted({ deleted: true })
            .then((books) => 
                res.render('me/trash-books', {
                    books: multipleMongooseToObject(books),
                }),
            )
            .catch(next);
    }

}

module.exports = new MeController();