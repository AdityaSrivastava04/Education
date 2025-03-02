import express from 'express'
import { updateRoletoEducate } from '../controllers/educatiorController.js'

const educatorRouter=express.Router()

educatorRouter.get('/update-role',updateRoletoEducate)

export default educatorRouter