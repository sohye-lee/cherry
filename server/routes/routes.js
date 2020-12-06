import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/controllers.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/like', likePost);

export default router;