const express =require('express');
const router =express.Router()
const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get('/', (req,res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({message: err})
    }
})
router.get('/specific', (req,res) => {
    res.send('SPECIFIC POST')
})

//SUMBIT A POST
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })    
    try{
        const savedPost = await post.save()
        res.json(savedPost)   
    }catch(err){
        res.json({message: err})
    } 
})

module.exports=router;  


