var express = require('express');
var app = express();
// var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
// var flash = require('express-flash');

//naming the database
mongoose.connect('mongodb://localhost/basic_mongoose');
// mongoose.Promise = global.Promise;



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// app.use(flash());
// app.use(session({
//     secret: 'GET IN MAH BELLY!',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 60000
//     }
// }))


// The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (request, response) {
    response.send("404")
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})