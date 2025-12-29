const express = require("express")
const { addBannerController, deleteBannerController } = require("../../../controller/bannerController")
const router = express.Router()
const multer  = require('multer')
const upload = require("../../../utils/upload")



router.post("/addbanner",upload.single("banner"), addBannerController)

router.delete("/deletebanner/:id", deleteBannerController)


module.exports = router