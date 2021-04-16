const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/post', async (req, res) => {
    const post = new Post({
        title: req.body.title
    })
    try {
        const savePost = await post.save()
        res.json(savePost)
    } catch (error) {
        console.log(error);
    }
})
router.get('/post', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (error) {
        res.json(error)
    }
});
router.delete('/post/:id', async (req, res) => {
    try {
        const deletePost = await Post.remove({ _id: req.params.id })
        res.json(deletePost)
    } catch (error) {
        res.json({messages: error})

    }
})

module.exports = router