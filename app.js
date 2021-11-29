const express = require('express')
const path = require('path');
var cookieParser = require('cookie-parser');


// passport dependencies
const passport = require('passport')
const passportLocal = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const session = require('express-session')


// routers
const carsRouter = require('./routes/cars');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}else {
    app.use(express.static(path.join(__dirname, 'public')));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(passport);


// attach router
app.use('/api/cars', carsRouter)
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})

module.exports = app;