// TODO cookie session : https://www.codementor.io/mayowa.a/how-to-build-a-simple-session-based-authentication-system-with-nodejs-from-scratch-6vn67mcy3

const express = require('express')
const app = express()
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const db = require('./db');

app.use(session({
  secret: 'batouparlebatard',
  cookie: {}
}));

var phpExpress = require('php-express')({
  binPath: 'php'
});

app.set('views', './public');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

app.all(/.+\.php$/, phpExpress.router);


app.use(express.static('public'));


// ********************************************************************************

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'BAtouparthebatard',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));



// middleware function to check for logged-in users && req.cookies.user_sid
var sessionChecker = (req, res, next) => {
  if (req.session.user ) {
    res.redirect('/index');
  } else {
    next();
  }    
};


// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/index');
});





app.get('/index', (req, res) => {

  console.log('TEST')
  //db.test();
  
  res.sendFile(__dirname + '/public/index.html');
  
});





// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("404 not found")
});

app.listen(8080, function () {
  console.log('Server Up')
});