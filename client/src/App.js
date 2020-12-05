import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './shared/actions/posts';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import useStyles from './styles';



const App = () => {

    const [ selectedId, setSelectedId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [selectedId, dispatch]);

    return (
        <>
            <Header selectedId={selectedId} setSelectedId={setSelectedId} />
            <Container maxwidth="xl" style={{marginTop:'80px'}}>
                <Grow in>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={12}>
                            <Posts selectedId={selectedId} setSelectedId={setSelectedId} />
                        </Grid>
                    </Grid>
                </Grow>
            </Container>
        </>
    );
};

export default App;