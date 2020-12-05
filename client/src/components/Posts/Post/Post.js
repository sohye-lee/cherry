import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, 
        Typography, Button,
        Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../shared/actions/actionCreators';

const Post = ({post, setFormOpen, setSelectedId}) => {
    const [ alertOpen, setAlertOpen ] = useState(false);
    const [ postOpen, setPostOpen ] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleAlertClose = () => setAlertOpen(false);
    const handlePostClose = () => setPostOpen(false);

    return (
        <>
            <Card className={classes.postWrapper}>
                <CardMedia 
                    className={classes.postImage}  
                    image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                    title={post.title} 
                />
                <div className={classes.postOverlay}>
                    <Typography variant="body1">{post.creator}</Typography>
                    <div className={classes.postInfo}>
                        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                        <Typography variant="body2">{post.location}</Typography>
                    </div>
                </div>
                <div className={classes.postTags}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <CardContent>
                    <Typography className={classes.postTitle} variant="body3" gutterBottom>{post.title}</Typography>
                </CardContent>
                <div className={classes.postMessageWrapper} onClick={() => setPostOpen(true)} >
                    <Typography className={classes.postMessage} variant="body2">{post.message}</Typography>
                </div>
                <CardActions className={classes.postActions}>
                    <p className={classes.postLike} style={post.likeCount>0 ? {display:'block'}: {display: 'none'}}>{post.likeCount}</p>
                    <button  onClick={() => dispatch(likePost(post._id))} className={classes.postIconWrapper}>
                        <FavoriteBorderIcon className={classes.postIcon}/>
                    </button>
                    <button 
                        onClick={() => {
                            setSelectedId(post._id);
                            setFormOpen(true);
                        }} className={classes.postIconWrapper}>
                        <CreateOutlinedIcon className={classes.postIcon}/>
                    </button>
                    <button 
                        onClick={() => setAlertOpen(true)} 
                        className={classes.postIconWrapper}
                    >
                        <DeleteOutlinedIcon className={classes.postIcon}/>
                    </button>
                </CardActions>
            </Card>
            <Dialog
                open={alertOpen}
                onClose={handleAlertClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.alertTitle} id="alert-dialog-title">{"Are you sure you wish to delete this post?"}</DialogTitle>
                <DialogActions className={classes.alertBtns}>
                    <Button 
                        onClick={() => {
                        handleAlertClose();
                        dispatch(deletePost(post._id));
                        }} 
                        color="secondary"
                    >
                        OK
                    </Button>
                    <Button onClick={handleAlertClose} color="primary" autoFocus>
                        CANCEL
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={postOpen}
                onClose={handlePostClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.alertTitle} id="alert-dialog-title">{post.title}</DialogTitle>
                <DialogContent>
                    <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}  style={{width:'100%', height:'auto'}}/>
                    <DialogContentText>
                        {post.message}
                        <Typography style={{marginTop: '30px'}} variant="body1">Created {moment(post.createdAt).fromNow()} @ {post.location}</Typography>
                        <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.alertBtns}>
                    <Button onClick={handlePostClose} color="primary" autoFocus>
                        CLOSE
                    </Button>
                </DialogActions>
            </Dialog>
            
      </>
    )
}

export default Post;