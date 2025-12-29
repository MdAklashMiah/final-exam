const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: [true, "quantity is require"],
            default: 1
        },
        totalprice:{
            type: Number
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Cart", cartSchema)