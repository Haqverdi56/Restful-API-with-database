const { MBuyer } = require("../models/BuyerModel");

const buyerController = {
    getAll: (req, res ) => {
        MBuyer.find({isDeleted:false}).populate('buyerAddress').exec((err, docs) => {
            if(!err) {
                res.json(docs)
            } else {
                res.status(500).json(err)
            }
        })
    },
    getById: (req, res) => {
        let id = req.params.id;
        MBuyer.find(id).populate('buyerAdress').exec((err, docs) => {
            if(!err) {
                res.json(docs)
            } else {
                res.status(500).json(err)
            }
        })
    },
    add: (req, res) => {
        let newBuyer = new MBuyer({
            buyerName: req.body.buyerName,
            phoneNumber: req.body.phoneNumber,
            buyerAddress: req.body.buyerAddress,
            isDeleted: false,
            date: req.body.date
        })

        newBuyer.save((err, docs) => {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err)
            }
        })
    },
    delete: (req,res) => {
        let id = req.params.id;
        MBuyer.findById(id, {isDeleted:true}, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    update: (req, res) => {
        let id = req.params.id;
        MAddress.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    buyerController
}