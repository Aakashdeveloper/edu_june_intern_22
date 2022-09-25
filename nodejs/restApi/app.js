let express = require('express');
let app = express();
/// for reading value form .env 
let dotenv = require('dotenv');
dotenv.config()
// for logging purposes
let morgan = require('morgan');
let fs = require('fs');
let port = process.env.PORT || 9800;

// middleware
app.use(morgan('short',{stream:fs.createWriteStream('./app.logs')}))

app.get('/',(req,res) => {
    res.send('This is From Express App code')
})

app.get('/home',(req,res) => {
    res.send('This is Home Page')
})

app.listen(port,() => {
    console.log(`Listing to port ${port}`)
})