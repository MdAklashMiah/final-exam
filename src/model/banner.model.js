const { default: mongoose } = require("mongoose");

const bannerSchema = new mongoose.Schema(
    {
      image:{
        type: String,
        required: [true, "Banner image is Require"]
      },
      link:{
        type: String,
      }
    },
    {timestamps: true}
)


module.exports = mongoose.model("Banner", bannerSchema)