const { MUser } = require("../models/UserModel");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    direct: true,
    host: 'smtp.yandex.com',
    port: 465,
    auth: {
        user: 'cagatay.yildiz@neominal.com',
        pass: 'xpioqsemuckxloiv'
    },
    secure: true
})
const userController = {
    getAll: (req, res) => {
        MUser.find({ isDeleted: false }, function (err, docs) {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    add: (req, res) => {
        let newUser = new MUser({
            userName: req.body.userName,
            password: req.body.password,
            isDeleted: false,
            date: req.body.date,
        })

        newUser.save(function (err, doc) {
            if (!err) {
                let privateKey = "Pipeline";
                let token = jwt.sign({ userName: newUser.userName }, privateKey, {
                    algorithm: 'HS256',
                    expiresIn: '8h'
                });
                res.json({ 'token': token });
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    sendMail:(req,res)=>{
        const { messageText, email } = req.query
        console.log("messageText", "email:", messageText, email)
 
        const mailOptions = {
            from: 'gamerhaki56@gmail.com',
            to: email,
            subject: 'Message Nodemailer',
            text: messageText,
        }
        
        transporter.sendMail(mailOptions, function (err, docs) {
            if (err) {
                console.log(err);
            }else{
                console.log(docs)
                res.json("Process is success")
            }
        })
    }
}

module.exports = {
    userController
}