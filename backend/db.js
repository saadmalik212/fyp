// const mongoose = require("mongoose")

// mongoose.connect(`mongodb://127.0.0.1:27017/Name_Db`)

// mongoose.connection.on("connected",()=>{
//     console.log("connected to mongoDb")
// })

// mongoose.connection.on("error",(err)=>{
//     console.error("connected error: ",err )
// })

// module.exports = mongoose

require("dotenv").config()
const mongoose = require("mongoose");

const dbURI = process.env.DB_URI

const db = async () => {
    try {
        await mongoose.connect(`${dbURI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
};

module.exports = db;
