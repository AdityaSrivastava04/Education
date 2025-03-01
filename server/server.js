import express from "express"
import cors from 'cors'
import 'dotenv/config'
import mongodbConnect from "./config/mongoDB.js"
import { clerkWebhooks } from "./controllers/webhooks.js"

// INITIAL EXPRESS
const app=express()
await mongodbConnect()

// MIDDLEWARE
app.use(cors())

// Routes
app.get('/',(req,res)=>res.send("API working"))
app.post('/clerk' ,express.json(),clerkWebhooks)
// PORT
const port=process.env.PORT||5000

app.listen(port,()=>{
    console.log(`Server is running at PORT${port}`)
})