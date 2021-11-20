const express = require('express')
const path = require('path');
var cookieParser = require('cookie-parser');



var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})