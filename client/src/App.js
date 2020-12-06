import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './shared/actions/actionCreators';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import useStyles from './appstyles';


const App = () => {

    const [ selectedId, setSelectedId ] = useState(null);
    const [ searchTerm, setSearchTerm ] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    let posts = '';
    const allPosts =  useSelector((state) => state.posts);
    if (searchTerm === '') {
        posts = allPosts;
    } else {
        posts = allPosts.filter(post => post.message.toLowerCase().includes(searchTerm) || post.title.toLowerCase().includes(searchTerm) || post.tags.includes(searchTerm));
    }


    return (
        <div className={classes.body}>
            <Header setSelectedId={setSelectedId} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className={classes.bodyContainer}>
                <Grow in>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={12}>
                            <Posts selectedId={selectedId} setSelectedId={setSelectedId} posts={posts} />
                        </Grid>
                    </Grid>
                </Grow>
            </div>
        </div>
    );
};

export default App;