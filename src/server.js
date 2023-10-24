const { log } = require('console');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const port = 3000;
const app = express();
const route = require('./routers/main');

// connect to Database
const db = require('./config/db');
db.connect();

// config static file
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));

// use "set" to set up handlebars to be your template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// render data to json
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// http logger
// app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});