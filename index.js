const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const port = process.env.PORT || 5000;

mongoose.connect(process.env.SECRET_KEY)
.then(res=>{
    console.log("Connect");
})
.catch(err => {
    console.log("err", err);
})

const ordersRouter = require("./routes/ordersRouter")

app.use('/orders',ordersRouter )
app.use('/', function(req, res) {
    res.send("Welcome my world")
})



app.listen(port,()=>{
    console.log("Server running...");
})