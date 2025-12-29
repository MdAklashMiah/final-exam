const express = require("express")
const { addtoCartController, allCartController, updateQuantityController } = require("../../../controller/cartController")
const router = express.Router()


router.post("/addtocart", addtoCartController)

router.get("/allcarts", allCartController)

router.patch("/updatequantity/:id", updateQuantityController)


module.exports = router