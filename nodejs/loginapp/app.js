const express = require('express');
const app = express();
const db = require('./db');
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const AuthContoller = require('./controller/authContoller');
app.use('/api/auth',AuthContoller);

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})