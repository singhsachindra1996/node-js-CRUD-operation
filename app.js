const express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const app = express();

//route declare
var index = require('./routes/index');
var emp_routes = require('./routes/emp_route');
// var register_route = require('./routes/register_route');
// var login_route = require('./routes/login_route');
var urlencodedParser = express.urlencoded({extended: false});


//view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','jade');

//uncomment after placing your favicon in/public
// app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

//route setup
app.use('/', index);
app.use('/employees', emp_routes);
// app.use('/login', login_route);
// app.use('/register', register_route);

//catch 404 and forword to error handler
app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Error Handler
app.use(function(err,req,res,next){
     // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env')=== 'development' ? 'err' : {};

    //render the error page
    res.status(err.status || 500);
    res.render('error');
    });

    app.listen(3000, function(err){
        if (err) console.log("Error in server setup")
        console.log("Server listening on Port", 3000);
    })

    
module.exports = app;
