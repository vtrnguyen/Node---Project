const booksRouter = require('./books');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use('/books', booksRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;