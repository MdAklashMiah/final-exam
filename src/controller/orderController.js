const cartModel = require("../model/cart.model");
const orderModel = require("../model/order.model");

let createOrderController = async (req, res) => {
  try {
    let { name, email, phone, city, address, deliveryCharge, paymentMethod } =
      req.body;

    let carts = await cartModel.find({}).populate("product");

    let items = carts.map((cart) => ({
      product: cart.product._id,
      quantity: cart.quantity,
    }));

    let totalprice = carts.reduce((prev, cur) => {
      let productprice = cur.product.discountPrice;
      let quantity = cur.quantity;

      return prev + productprice * quantity;
    }, 0);

    let order = await orderModel({
      name,
      email,
      phone,
      city,
      address,
      deliveryCharge,
      paymentMethod,
      items,
      totalPrice: totalprice
    });

    await order.save()

    return res.status(201).json({success: true, message: "Order placed successfully", data: order})

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
  createOrderController,
};
