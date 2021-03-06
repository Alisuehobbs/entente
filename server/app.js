var express = require('express'),
  io = require('socket.io'),
  http = require('http'),
  app = express(),
  server = http.createServer(app),
  io = io.listen(server)
  server.listen(3000)
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var geocoder = require ('geocoder')


var api = require('./routes/api');
var register = require('./routes/register');
var signup = require('./routes/signup');
var questions = require('./routes/questions');
var socket = require('./routes/socket');

io.sockets.on('connection', socket)

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', api);
app.use('/register', register);
app.use('/signup', signup);
app.use('/questions', questions);
app.use('/socket', socket);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    if (app.get('env') !== 'development') {
        // eslint-disable-next-line no-console
        console.log('Listening on port', port);
    }
});


module.exports = app;
