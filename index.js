const express_ = require('express');
const app = express_();
const bodyparser = require("body-parser")
const helmet = require("helmet");
var cors = require('cors');
const rateLimit = require("express-rate-limit");
const xss  = require("xss-clean");


app.use(cors());//to follow cors policy
app.use(xss());//safety against XSS attack or Cross Site Scripting attacks
app.use(helmet());//safety against XSS attack
app.use(express_.json({ extended: false }));
app.use(express_.static('.'));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const port = process.env.PORT || 3000;


app.use('/api/mail',require('./api/sendmail'));



app.get('/',(req,res) =>{
    console.log("hello")
    res.json('working')
})


app.listen(port,() => console.log(`Server is up and running at ${port}`));