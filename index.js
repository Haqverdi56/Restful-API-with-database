const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const ordersRouter = require("./routes/ordersRouter")
const categoryRouter = require("./routes/categoryRouter")
const addressRouter = require("./routes/addressRouter")
const buyerRouter = require("./routes/buyerRouter")

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


app.use('/orders',ordersRouter)
app.use('/category',categoryRouter)
app.use('/address',addressRouter)
app.use('/buyer',buyerRouter)
app.use('/', function(req, res) {
    res.send("Welcome my world")
})



app.listen(port,()=>{
    console.log("Server running...");
})