require('dotenv').config();
const PORT = process.env.PORT || 3000;
const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const session = require ('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const facebook = require('passport-facebook');
const mongoose = require('mongoose');
const shopifyAPI = require('shopify-node-api');
mongoose.Promise = require('bluebird');



app.use(express.static(__dirname + '/client/build'));
//  parsing into json
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.get('/',function(req,res) {
//     res.send('/');
// });
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
 
var auth = require('./routes/auth');
app.use('/api/auth', auth);
//connection to shopify api  
const Shopify = new shopifyAPI({
  shop: process.env.SHOPIFY, // MYSHOP.myshopify.com
  shopify_api_key: process.env.SHOPIFYAPI, // Your API key
  access_token: process.env.SHOPIFYPASS // Your API password
});

var auth_url = Shopify.buildAuthURL();

app.get('/finish_auth', function(req, res){
    var Shopify = new shopifyAPI(config),
    query_params = req.query;

Shopify.exchange_temporary_token(query_params, function(err, data){
    console.log(data);
});
});

app.get('/api/products', function(req, res) {
    Shopify.get('/admin/products.json', function(err, data, headers){
        console.log(data); // Data contains product json information
        console.log(headers); // Headers returned from request

        res.send(data);
    });
});


app.get('*', function(req, res) {
  res.sendFile(path.resolve('./client/build/index.html'));
});


//keeps us aware of api limit being reached or exceeded
function callback(err, data, headers) {
    var api_limit = headers['http_x_shopify_shop_api_call_limit'];
    console.log( api_limit ); // "1/40"
  }
// Shopify.get('/admin/products.json', function(err, data, headers){
//     console.log(data); // Data contains product json information
//     console.log(headers); // Headers returned from request
//   });
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
   });

   mongoose.connect('mongodb://localhost/passport', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));