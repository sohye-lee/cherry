import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './styles';

const Post = () => {

    const classes = useStyles();

    return (
        <Container className={classes.wrapper}>
            <Container className={classes.content}>
                <h1>Title</h1>
                <h4>Description of the image</h4>
                <h5>11/30/2020 5:20PM</h5>
                <h5>@ Fairfax, VA, USA</h5>
            </Container>
        </Container>
    )
}

export default Post;