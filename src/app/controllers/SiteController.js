const Book = require('../models/Book');
const { multipleMongooseToObject } =  require('../../util/mongoose');

class SiteController {
    // [GET] /home
    home(req, res, next) {
        Book.find({})
            .then((books) => {
                res.render('home', {
                    books: multipleMongooseToObject(books),
                })
            })
            .catch(next);
    }
}

module.exports = new SiteController();