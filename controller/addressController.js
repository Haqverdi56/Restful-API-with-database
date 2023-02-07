const { MAddress } = require('../models/AddressModel');

const addressController = {
    getAll: async(req, res) => {
        data = await MAddress.find({isDeleted:false})
        res.json(data)
    },
    getById: (req, res) => {
        let id = req.params.id;
        MAddress.findById(id,(err,docs)=>{
            if(!err){
                res.json(docs)
            }else{
                (res.status(500).json(err))
            }
        })
    },
    add: (req, res) => {
        console.log(req.body);
        let newTodo = new MAddress({
            title: req.body.title
        })
        newTodo.save(function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                (res.status(500).json(err))
            }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        MAddress.findById(id,(err,docs)=>{
            if(!err){
                docs.isDeleted = true;
                docs.save()
                res.json({message:"success"})
            }else{
                (res.status(500).json(err))
            }
        })
    },
    update: (req,res) => {
        const id = req.params.id;
        console.log(req.body);
        MAddress.findByIdAndUpdate(id, {title:req.body.title, runValidators:true}, (err, docs) => {
            if(!err){
                res.json(docs)
                docs.save()
            }else{
                res.status(500).json(err)
            }
        })
    },
}

module.exports = {
    addressController
}