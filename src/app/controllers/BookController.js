const Book = require('../models/Book');
const { mongooseToObject } = require('../../util/mongoose');

class BookController {
    // [GET] /books/:slug
    show(req, res, next) {
        console.log(req.params.slug);
        Book.findOne({ slug: req.params.slug })
            .then((book) => {
                res.render('books/show', {
                    book: mongooseToObject(book),
                })
            })
            .catch(next);
    }

    // [GET] /books/create
    create(req, res, next) {
        res.render('books/create');
    }

    // [POST] /books/store
    store(req, res, next) {
        const book = new Book(req.body);
        book.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new BookController();