const express=require('express')
const router=express.Router()
const passport=require('../configs/passport-jwt')
const postController=require('../controllers/postController')

router.get('/',passport.authenticate('jwt',{session: false}),postController.createPost)

module.exports=router