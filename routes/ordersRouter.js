const express = require('express')
const { ordersController } = require('../controller/ordersController')
const router = express.Router()



router.get('/',ordersController.getAll)
router.post('/',ordersController.add)
router.get('/:id',ordersController.getById)
router.delete('/:id',ordersController.delete)
router.put('/:id',ordersController.update)


module.exports = router;