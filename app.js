const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //gives us methods to accept requests (HTTP Methods): GET, POST, DELETE, PUT
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine', 'ejs');


//bodyparser middleware to access POST handler from form
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.get('route', callback())
// ROUTE - HOME - user signs up
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})

// ROUTE  - GET data from FORM
app.get('/itemListings', function(req, res){
    res.send('display user details and listing items');
});

// ROUTE - POST DATA to FORM
//database of item listings - data POSTED from form will be parsed through middleware
app.post('/itemListings', urlencodedParser, function(req, res){
    console.log(req.body); 
    res.render('success', {data: req.body});
});




app.listen(PORT, function() {
    console.log(`I love you ${PORT} - IronMan`);
});