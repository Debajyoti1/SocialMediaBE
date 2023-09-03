// Require the express module and create a new router object
const express=require('express')
const router=express.Router()
const homeController=require('../controllers/homeController')
router.get('/',homeController.home)
router.use('/user',require('./user'))
router.use('/post',require('./post'))

module.exports=router