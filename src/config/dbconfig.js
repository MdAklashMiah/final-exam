const { default: mongoose } = require("mongoose")

let dbConnect = () =>{
    mongoose.connect(`mongodb+srv://mdaklashmiah:mdaklashmiah07@cluster0.lll2tjr.mongodb.net/mdaklashmiah?appName=Cluster0`).then(()=>{
        console.log("Database Connected Successfully")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnect