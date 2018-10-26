// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/contactlist', { useMongoClient: true });
var conn = mongoose.connection;

conn.once('createConnection', function ()
{
    console.log("Mongoose connection opened on process " + process.pid);
});


//on connection
conn.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
})

conn.on('error',(err)=>{
    if(err){
       console.log('Error in Database connection:'+err);
    }
})


//port no
const port = 3000;

//adding middleware -cors
app.use(cors());

//body - parser
app.use(bodyParser.json());

app.get('/',(req, res, next)=>{
    res.send("Server is running");
});
//static files
//app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api',route);



app.listen(port,()=>{
    console.log('Server started at port : '+ port);
})