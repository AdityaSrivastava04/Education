import mongoose from "mongoose";

// connect mongodb

const mongodbConnect=async ()=>{
    mongoose.connection.on('connected',()=>console.log("Database connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/EDUCATION`)
}

export default mongodbConnect