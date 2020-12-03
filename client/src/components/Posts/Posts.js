import React from 'react';
import { useSelector } from 'react-redux';


import Post from './Post/Post';
import { Grid } from '@material-ui/core';

import useStyles from './styles.js';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        <>
            <Grid container className={classes.postsWrapper} >
                <Post />
                <Post />
            </Grid>
            
        </>
    )
}

export default Posts;