const { MOrders } = require("../models/OrdersModel");

const ordersController = {
    getAll: (req, res) => {
        console.log("req",  req);
        const {limit,sort}=req.query
        MOrders.find({isDeleted:false})
        .limit(limit)
        .sort({productPrice:sort})
        // .populate("categoryId")
        // .populate({path:"buyerID",populate:{path:"buyerAddress"}})
        .exec((err,docs)=>{
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(docs)
            }
        })
    },
    add: (req, res) => {
        let newOrders=new MOrders({
            streetName: req.body.streetName,
            city:req.body.city,
            region:req.body.productPrice,
            postalCode:req.body.postalCode,
        })
        newOrders.save((err,docs)=>{
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(docs)
            }
        })
    },
    getById: (req, res) => {
        let id = req.params.id;
        MOrders.findById(id).populate('categoryId')
            .populate({ path: "buyerId", populate: { path: 'buyerAdress' } })
            .exec((err, doc) => {
                if (!err) {
                    res.json(doc)
                } else {
                    res.status(500).json(err);
                }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        MOrders.findByIdAndUpdate(id, { isDeleted: true }, { new: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    update: (req, res) => {
        let id = req.params.id;
        MOrders.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    ordersController
}