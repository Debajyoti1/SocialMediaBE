const Post = require('../models/post')
const User = require('../models/user')

module.exports.home = async (req, res) => {
    // console.log(req.cookies);
    // res.cookie('b','c')
    try {
        const allUsers = await User.find({})
        const posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({
                path: 'comment',
                populate: {
                    path: 'user',
                    select: '-password'
                },
                populate: {
                    path: 'like',
                    select: '-password'
                }
            })
            .populate('like')
        return res.status(200).json({
            message: 'List of Posts',
            posts: posts
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}