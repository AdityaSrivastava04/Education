import express from "express"
import cors from 'cors'
import 'dotenv/config'
import mongodbConnect from "./config/mongoDB.js"
import { clerkWebhooks } from "./controllers/webhooks.js"
import educatorRouter from "./routes/educatorRoutes.js"
import { clerkMiddleware } from "@clerk/express"

// INITIAL EXPRESS
const app=express()
await mongodbConnect()

// MIDDLEWARE
app.use(cors())
app.use(clerkMiddleware())

// Routes
app.get('/',(req,res)=>res.send("API working"))
app.post('/clerk' ,express.json(),clerkWebhooks)
app.use('/api/educator',express.json(),educatorRouter)
// PORT
const port=process.env.PORT||5000

app.listen(port,()=>{
    console.log(`Server is running at PORT${port}`)
})