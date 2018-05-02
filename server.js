require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const session = require ('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const facebook = require('passport-facebook');
const mongoose = require('mongoose');


app.use(express.static('app/public'));
//  parsing into json
app.use(bodyParser.urlencoded({
  extended: true
}));

// log every request to the console
app.use(morgan('dev'));

// read cookies (needed for auth)
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// required for passport
app.use(session({
    secret: 'session active',
    resave: true,
    saveUninitialized: true
  }));

  // session secret
app.use(passport.initialize());

// persistent login sessions
app.use(passport.session());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });