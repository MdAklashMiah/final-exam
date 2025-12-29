const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is Require"]
        },
        phone:{
            type: String,
            required: [true, "Phone is Require"]
        },
        email:{
            type: String,
        },
        city: {
            type: String,
            required: [true, "City is Require"]
        },
        address: {
            type: String,
            required: [true, "Address is Require"]
        },
        deliveryCharge:{
            type: String,
            enum: ["insideDhaka", "outsideDhaka"],
            default: "outsideDhaka"
        },
        paymentMethod: {
            type: String,
            enum: ["cod", "online"]
        },
        items:[
            {
                product: {
                    type: mongoose.Types.ObjectId,
                    ref: "Product"
                },
                quantity:{
                    type: Number,
                }
            }
        ],
        totalPrice:{
            type: Number
        },
        orderStatus:{
            type: String,
            enum: ["pending", "cancel", "deliverd"]
        },
        trans_id:{
            type: String
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Order", orderSchema)