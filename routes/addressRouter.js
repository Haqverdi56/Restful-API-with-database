const express = require('express');
const { addressController } = require('../controller/addressController');
const router = express.Router()

router.get('/', addressController.getAll)
router.get('/:id', addressController.getById)
router.post('/', addressController.add)
router.delete('/:id', addressController.delete)
router.put('/:id', addressController.update)


module.exports = router