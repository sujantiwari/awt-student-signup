require('dotenv').config();
const bcrypt = require('bcrypt');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth.route');
var usersRouter = require('./routes/users.route');
var projectsRouter = require('./routes/projects.route');
var categoryRouter = require('./routes/category.route');
var signupRouter = require('./routes/signup.route');
var middleware = require('./middleware/auth.middleware');
var app = express();
var db = require('./config/db.config');
var router = express.Router();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


db.connect().then(() => {});
app.options('*', cors()); // enable pre-flight
app.use('/', indexRouter(router));
app.use('/users', usersRouter(db, middleware, bcrypt));
app.use('/category', categoryRouter(db));
app.use('/project', projectsRouter(db));
app.use('/signup', signupRouter(db, middleware));
app.use('/auth', authRouter(db, bcrypt));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});


// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === process.env.NODE_ENV ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;