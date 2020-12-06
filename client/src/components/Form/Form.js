import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../shared/actions/actionCreators'
import useStyles from './styles';


const MakeForm = ({selectedId, setSelectedId, setFormOpen}) => {
    const [ postData, setPostData ] = useState({
        creator: '',
        title: '',
        message: '',
        tags: [],
        selectedFile: '',
        location: ''
    });

    const post = useSelector((state) => selectedId ? state.posts.find((p) => p._id === selectedId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])
    
    const clear = () => {
        setSelectedId(null);
        setPostData({ creator: '', title: '', message: '', tags: [], selectedFile: '', location: ''});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedId) {
            dispatch(updatePost(selectedId, postData));
            console.log(selectedId);
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }
        setFormOpen(false);

    }

    return (
        <div className={classes.formContainer}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit} >
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
                    name="where" 
                    variant="outlined" 
                    label="Where" 
                    fullWidth
                    value={postData.location}
                    onChange={(e) => setPostData({...postData, location: e.target.value})}
                />
                <TextField 
                    className={classes.fileInput}
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    placeholder="separate tags with ,"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => 
                        setPostData({...postData, tags: e.target.value.includes(',')? e.target.value.replace(' ','').toLowerCase().split(',') : [e.target.value]})
                    }
                />
                <div className={classes.fileUpload}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => 
                            setPostData({ ...postData, selectedFile: base64})
                        }
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    size="large"
                    type="submit"
                    fullWidth
                >
                    {(selectedId) ? 'UPDATE' : 'CREATE'}
                </Button>
                <Button
                    className={classes.buttonClear} 
                    variant="contained" 
                    size="large"
                    onClick={clear}
                    fullWidth
                >
                    CLEAR
                </Button>
            </form>
        </div>
    )
}

export default MakeForm;