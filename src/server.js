const { log } = require('console');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const port = 3000;

const app = express();

// template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
// use "set" to set up handlebars to be your template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// http logger
// app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});