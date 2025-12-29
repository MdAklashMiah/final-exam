const { default: slugify } = require("slugify");
const productModel = require("../model/product.model");
const path = require("path")
const fs = require("fs")

let createProductController = async (req, res) => {
  try {
    let { title, description, stock, price, discountPrice } = req.body;

    let slug = slugify(title, {
      replacement: "-",
      remove: undefined,
      lower: false,
      trim: true,
    });

    let { filename } = req.file;

    let product = await productModel({
      title,
      description,
      slug,
      stock,
      price,
      discountPrice,
      image: `${process.env.SERVER_URL}/${filename}`,
    });

    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

let deleteProductController = async (req, res) => {
  try {
    let {id} = req.params

    let product = await productModel.findOneAndDelete({_id: id})

    let imageurl = product.image.split("/")

    let filepath = path.join(__dirname, "../../uploads")
    

    fs.unlink(`${filepath}/${imageurl[imageurl.length -1]}`, (err)=>{
        if(err){
            return res.send(err)
        }
    })

    return res.status(200).json({success: true, message: "product deleted successfully"})
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
  }
};

module.exports = {
  createProductController,
  deleteProductController
};
