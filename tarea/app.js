var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var nosotrosRouter = require('./routes/nosotros'); //routes/nosotros.js
var contactoRouter = require('./routes/contacto'); //routes/contacto.js
var novedadesRouter = require('./routes/novedades'); //routes/novedades.js
var homeRouter = require('./routes/home'); //routes/home.js
var juegosRouter = require('./routes/juegos'); //routes/juegos.js
var videosRouter = require('./routes/videos'); //routes/videos.js





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/nosotros', nosotrosRouter);
app.use('/contacto', contactoRouter);
app.use('/novedades', novedadesRouter);
app.use('/home', homeRouter);
app.use('/juegos', juegosRouter);
app.use('/videos', videosRouter);







app.get('/prueba', function (req, res) {
  res.send('hola soy prueba')
})

app.get('/home', function (req, res) {
  res.render('holaaaaaa home')
})


app.get('/juegos', function (req, res) {
  res.render('hola juegos')
})

app.get('/videos', function (req, res) {
  res.render('hola videos')
})
app.get('/novedades', function (req, res) {
  res.render('hola novedades')
})

app.get('/contacto', function (req, res) {
  res.send('hola soy contacto')
})

app.get('/servicios', function (req, res) {
  res.render('servicios')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
