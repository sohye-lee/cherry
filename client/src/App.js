import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './shared/actions/posts';
import Posts from './components/Posts/Posts';
import MakeForm from './components/Form/Form';
import logo from './images/logo.png';
import useStyles from './styles';



const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <>
        
            <Container maxwidth="xl">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <img className={classes.image} src={logo} alt="logo" height="40" width="40" />
                    <Typography className={classes.heading} variant="h2" align="center">cherry</Typography>
                    <Typography className={classes.subtitle} variant="h4" align="center">- cherish your moments</Typography>
                </AppBar>
            </Container>

            <div className={classes.bar} />

            <Container maxwidth="xl">
                <Grow in>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MakeForm />
                        </Grid>
                    </Grid>
                </Grow>
            </Container>
            
        </>
    );
};

export default App;