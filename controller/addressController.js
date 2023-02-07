const { MAddress } = require('../models/AddressModel');

const addressController = {
    getAll: (req, res) => {
        MAddress.find({ isDeleted: false }, function (err, docs) {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    getById: (req, res) => {
        let id = req.params.id;
        MAddress.findById(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    add: (req, res) => {
        let newAdress = new MAddress({
            streetName: req.body.streetName,
            city:req.body.city,
            region:req.body.region,
            postalCode:req.body.postalCode,
            isDeleted: false,
            date: req.body.date,
        })

        newAdress.save(function (err, doc) {
            if (!err) {
                res.json(doc)
            }
            else {
                res.status(500).json(err)
            }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        MAddress.findById(id, {isDeleted:true}, (err,docs)=>{
            if (!err) {
                res.json(docs)
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
    addressController
}