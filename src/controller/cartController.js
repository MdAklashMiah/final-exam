const cartModel = require("../model/cart.model");
const productModel = require("../model/product.model");

let addtoCartController = async (req, res) => {
  try {
    let { product, quantity } = req.body;

    let productInfo = await productModel.findById(product);

    let totalprice = productInfo.discountPrice * quantity;

    let cart = await cartModel({
      product,
      quantity,
      totalprice,
    });
    await cart.save();

    return res
      .status(201)
      .json({ success: true, message: "add to cart successfully", data: cart });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

let allCartController = async (req, res) => {
  try {
    let allcart = await cartModel.find({}).populate({
      path: "product",
      select: "title description image price discountPrice",
    });

    return res
      .status(200)
      .json({
        success: true,
        message: "All cart fetch successfully",
        data: allcart,
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

let updateQuantityController = async (req, res) => {
  try {
    let { quantity } = req.body;
    let { id } = req.params;

    let cart = await cartModel.findOneAndUpdate(
      { product: id },
      { quantity },
      { new: true }
    );

    return res
      .status(200)
      .json({ success: true, message: "Quantity Updated", data: cart });
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
  addtoCartController,
  allCartController,
  updateQuantityController,
};
