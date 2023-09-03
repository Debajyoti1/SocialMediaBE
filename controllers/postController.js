const Post=require('../models/post')

module.exports.createPost=(req,res)=>{
    const existingUser=req.user
    return res.json(existingUser)
}