import express from "express"
import cors from 'cors'
import 'dotenv/config'

// INITIAL EXPRESS
const app=express()

// MIDDLEWARE
app.use(cors())

// Routes
app.get('/',(req,res)=>res.send("API working"))

// PORT
const port=process.env.PORT||5000