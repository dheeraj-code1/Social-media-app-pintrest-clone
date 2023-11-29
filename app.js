var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session =  require('express-session');
var passport = require('passport')
const flash = require("connect-flash");
 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(flash());
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret: "hum hoghe kamiyab",
}))

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs")

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
