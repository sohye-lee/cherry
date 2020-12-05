import React, { useState, useEffect } from 'react';
import { Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './shared/actions/actionCreators';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import useStyles from './appstyles';


const App = () => {

    const [ selectedId, setSelectedId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className={classes.body}>
            <Header selectedId={selectedId} setSelectedId={setSelectedId} />
            <div className={classes.bodyContainer}>
                <Grow in>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={12}>
                            <Posts selectedId={selectedId} setSelectedId={setSelectedId} />
                        </Grid>
                    </Grid>
                </Grow>
            </div>
        </div>
    );
};

export default App;