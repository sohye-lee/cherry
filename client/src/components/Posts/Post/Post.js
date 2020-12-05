import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button,
        Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../shared/actions/posts';

const Post = ({post, setFormOpen, setSelectedId}) => {
    const [ alertOpen, setAlertOpen ] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleAlertClose = () => setAlertOpen(false);


    return (
        <>
            <Card className={classes.postWrapper} onMouseEnter={() => {}}>
                <CardMedia className={classes.postImage} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
                <div className={classes.postOverlay}>
                    <Typography variant="body3">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                    <Typography variant="body2">{post.location}</Typography>
                </div>
                <div className={classes.postTags}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <CardContent>
                    <Typography className={classes.postTitle} variant="body3" gutterBottom>{post.title}</Typography>
                </CardContent>
                <div className={classes.postMessageWrapper}>
                    <Typography className={classes.postMessage} variant="body2">{post.message}</Typography>
                </div>
                <CardActions className={classes.postActions}>
                    <p>{post.likeCount} Liked</p>
                    <button  onClick={() => {}} className={classes.postIconWrapper}>
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
      </>
    )
}

export default Post;