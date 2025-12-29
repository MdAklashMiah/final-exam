const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "title is required"]
        },
        description:{
            type: String,
            required: [true, "Description is required"]
        },
        image:{
            type: String,
            required: [true, "Image is required"]
        },
        slug:{
            type: String
        },
        stock:{
            type: Number,
        },
        price:{
            type: Number,
            required: [true, "Price is required"]
        },
        discountPrice: {
            type: Number,
        }
    },
    {timestamps: true}
)



module.exports = mongoose.model("Product", productSchema)