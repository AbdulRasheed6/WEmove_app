const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

// app.use(express.static('public'));
app.use('./public', express.static(path.join(__dirname + './public/style.css')));
console.log(__dirname);

//Ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Routes

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server listening on Port ${PORT} `));
