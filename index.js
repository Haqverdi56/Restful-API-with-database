const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const ordersRouter = require('./routes/ordersRouter')
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
const port = process.env.PORT || 5000;


mongoose.set('strictQuery', true);
mongoose.connect(process.env.SECRET_KEY)
.then(res=>{
    console.log("Connect");
})
.catch(err => {
    console.log("err", err);
})

app.use('/orders', ordersRouter)

app.use('/', function(req, res) {
    res.send("Welcome my world")
})


app.listen(port,()=>{
    console.log("Server running...");
})