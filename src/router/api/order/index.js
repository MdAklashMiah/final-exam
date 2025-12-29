const express = require("express")
const { createOrderController } = require("../../../controller/orderController")
const router = express.Router()

router.post("/createorder", createOrderController)


module.exports = router