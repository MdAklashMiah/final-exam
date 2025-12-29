const express = require("express")
const router = express.Router()
const banner = require("./banner")
const product = require("./product")
const cart = require("./cart")
const order = require("./order")

router.use("/banner", banner)
router.use("/product", product)
router.use("/cart", cart)
router.use("/order", order)


module.exports = router