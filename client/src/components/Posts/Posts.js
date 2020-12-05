import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import MakeForm from '../Form/Form';
import { Grid, CircularProgress, Fade, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

import useStyles from './styles.js';

const Posts = ({ selectedId, setSelectedId }) => {
    const [ formOpen, setFormOpen ] = useState(false);
    const posts = useSelector((state) => state.posts);
    const deployPosts = posts.map((post) => (
        <Grid key={post._id} item xs={12}>
            <Post post={post} setFormOpen={setFormOpen} setSelectedId={setSelectedId} />
        </Grid>
    ));

    const classes = useStyles();

    const handleCloseForm = () => {
        setFormOpen(false);
    }
    
    return (
        
            !posts.length ? <CircularProgress className={classes.loading}/> : (
                <>
                <Grid className={classes.postsWrapper} container alignItems="stretch" spacing={1}>
                    {deployPosts}
                </Grid>
            
            <Fade in={formOpen} timeout={400}>
                <Dialog 
                    className={classes.formWrapper} 
                    open={formOpen} 
                    onClose={handleCloseForm} 
                    aria-labelledby="form-dialog-title"
                    keepMounted
                >
                    <DialogTitle id="form-dialog-title" className={classes.formTitle}>
                        Update This Page
                    </DialogTitle>
                    <DialogContent className={classes.formContent}>
                        <MakeForm selectedId={selectedId} setSelectedId={setSelectedId} setFormOpen={setFormOpen}/>
                    </DialogContent> 
                    <DialogActions className={classes.formTitle}>
                        <Button onClick={handleCloseForm}>CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </Fade>
            </>
            )
    )
}

export default Posts;