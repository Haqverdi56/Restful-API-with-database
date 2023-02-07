const { MCategory } = require("../models/CategoryModel");

const categoryController = {
    getAll: (req, res) => {
        MCategory.find({ isDeleted: false }, function (err, docs) {
            if (!err) {
                res.json(docs)
            }
            else {
                res.status(500).json(err);
            }
        }
        )
    },
    add: (req, res) => {
        let newCategory = new MCategory({
            categoryName: req.body.categoryName,
            categoryDescription:req.body.categoryDescription,
            isDeleted: false,
            date: req.body.date,
        })

        newCategory.save(function (err, doc) {
            if (!err) {
                res.json(doc)
            }
            else {
                res.status(500).json(err)
            }
        })
    },
    getById: (req, res) => {
        let id = req.params.id;
        MCategory.findById(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    delete: (req, res) => {
        let id = req.params.id;
        MCategory.findByIdAndUpdate(id, {isDeleted:true}, { new: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    },
    update: (req, res) => {
        let id = req.params.id;
        MCategory.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true }, (err, doc) => {
            if (!err) {
                res.json(doc)
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    categoryController
}