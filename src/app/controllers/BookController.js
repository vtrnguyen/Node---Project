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
}

module.exports = new BookController();