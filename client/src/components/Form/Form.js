import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../shared/actions/posts'
import useStyles from './styles';


const MakeForm = () => {
    const [ postData, setPostData ] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
        location: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        console.log(postData);
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.formContainer}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit} >
                <Typography variant="h6">
                    Creating a Memory
                </Typography>
                <TextField 
                    className={classes.fileInput}
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                />
                <TextField 
                    className={classes.fileInput}
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                <TextField 
                    className={classes.fileInput}
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    multiline={true}
                    rows={5}
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                />
                <TextField 
                    className={classes.fileInput}
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    CREATE
                </Button>
                <Button
                    className={classes.buttonClear} 
                    variant="contained" 
                    color="secondary"
                    size="large"
                    onClick={clear}
                    fullWidth
                >
                    CLEAR
                </Button>
            </form>
        </Paper>
      
    )
}

export default MakeForm;