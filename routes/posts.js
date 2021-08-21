const express = require('express');

const router = express.Router();
const postmodel = require('../models/posts');


router.get('/',async (req, res) => {
    try{
        const findpost = await postmodel.find();
        res.json(findpost);
    }catch(err){
        res.json({message: err});
        

    }
});


router.post('/', async(req, res) => {
    const posts = new postmodel({
        gun: req.body.gun,
        price: req.body.price,
        bulletused: req.body.bulletused
    });
    try{
    const savedposts = await posts.save();
        res.json(savedposts)
    }
    catch(err) {
        res.json({message: err});
    }

});

//SPECIFIC POST

router.get('/:gun', async(req, res) => {

    try{
        const post =  await postmodel.findOne({gun : req.params.gun})
        res.json(post);
    } catch(err){
        res.json({message: err });
    }
});

//delete post
router.delete('post', async (req,res) => {
    try{
        const removePost = await Post.remove({_id: req.params.post });
        res.json(removedpost);
    }catch(err){
        res.json({message: err });
    }     
} );

module.exports = router;
