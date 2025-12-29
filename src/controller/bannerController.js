const bannerModel = require("../model/banner.model");
const path = require("path")
const fs = require("fs")

let addBannerController = async (req, res) => {
  try {
    let {filename} = req.file
    let {link} = req.body

    let banner = await bannerModel({
        image: `${process.env.SERVER_URL}/${filename}`,
        link
    })

    await banner.save()

    return res.status(201).json({
      success: true,
      message: "Banner added successfully",
      data: banner
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

let deleteBannerController = async (req, res) => {
    try {
        let {id} = req.params

        let banner = await bannerModel.findOneAndDelete({_id: id})

        let imageurl = banner.image.split("/")

        let filepath = path.join(__dirname, "../../uploads")

        fs.unlink(`${filepath}/${imageurl[imageurl.length -1]}`, (err)=>{
            if(err){
                return res.send(err)
            }
        })
        
        return res.status(200).json({success: true, message: "Banner Deleted Successfully"})


    } catch (error) {
        return res.status(500).json({success: false, message: "Internal Server Error", error: error.message})
    }
}

module.exports = {
  addBannerController,
  deleteBannerController
};
