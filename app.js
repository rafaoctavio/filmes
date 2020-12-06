const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const filmesRouter = require('./routes/filmes');
const generoRouter = require('./routes/generos');
const loginRouter = require('./routes/login');
const loginMiddleware = require('./middlewares/loginMiddleware')

const sessionOptions = {
  secret: 'fEt#Qc3r%SNC@pg11!JK',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
};

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.set('trust proxy', 1);
app.use(session(sessionOptions));

app.use('/', indexRouter);
app.use('/login', loginRouter);

app.use(loginMiddleware.loggedUser);
app.use('/users', usersRouter);
app.use('/filmes', filmesRouter);
app.use('/generos', generoRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
