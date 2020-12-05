import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req,res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const { title, message, creator, location, tags, selectedFile }= req.body;

    if (! mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('Can\'t find the post you requested');
    };

    const updatedPost = {creator, title, message, location, tags, selectedFile, _id:id}
   
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const id = req.params.id;
    
    if (! mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('Can\'t find the post you requested to delete');
    };

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post successfully deleted'});
}