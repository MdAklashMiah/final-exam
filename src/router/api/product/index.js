const express = require("express")
const { createProductController, deleteProductController } = require("../../../controller/productController")
const upload = require("../../../utils/upload")
const router = express.Router()


router.post("/addproduct",upload.single("product"), createProductController)

router.delete("/deleteproduct/:id", deleteProductController)

module.exports = router