import React, { useState } from 'react';
import { AppBar, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, Fade, TextField } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MakeForm from '../Form/Form';
import logo from '../../images/logo.png';
import useStyles from './styles';
import SearchBar from './SearchBar/SearchBar';


const Header = ({ setSelectedId, searchTerm, setSearchTerm }) => {
    const [ formOpen, setFormOpen ] = useState(false);
    const [ loginOpen, setLoginOpen ] = useState(false);

    const classes = useStyles();

    const toggleForm = () => setFormOpen(!formOpen);
    const handleCloseForm = () => setFormOpen(false);

    const toggleLoginForm = () => setLoginOpen(!loginOpen);
    const handleCloseLogin = () => setLoginOpen(false);

    const handleLogin = () => {};

    return (
        <div className={classes.header}>
            <AppBar className={classes.headerWrapper} position="static" color="inherit">
                <a href="/" className={classes.brandWrapper}>
                   <img className={classes.logo} src={logo} alt="logo" height="40" width="40" />
                    <Typography className={classes.brand} variant="h2" align="center">cherry</Typography>
                    <Typography className={classes.brandSubtitle} variant="h4" align="center">- cherish your moments</Typography>
                </a>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className={classes.userIcons} >
                    <CreateIcon onClick={toggleForm} className={classes.userIcon}/>
                    <InsertEmoticonIcon onClick={toggleLoginForm} className={classes.userIcon}/>
                </div>
            </AppBar>
            <Fade in={formOpen} timeout={400}>
                <Dialog 
                    className={classes.formWrapper} 
                    open={formOpen} 
                    onClose={handleCloseForm} 
                    aria-labelledby="form-dialog-title"
                    keepMounted
                >
                    
                    <DialogTitle id="form-dialog-title" className={classes.formTitle}>
                        Create A New Memory
                    </DialogTitle>
                    <DialogContent className={classes.formContent}>
                        <MakeForm setFormOpen={setFormOpen} setSelectedId={setSelectedId}/>
                    </DialogContent> 
                    <DialogActions className={classes.formTitle}>
                        <Button onClick={handleCloseForm}>CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </Fade>
            <Fade in={loginOpen} timeout={400}>
                <Dialog 
                    className={classes.formWrapper} 
                    open={loginOpen} 
                    onClose={handleCloseLogin} 
                    aria-labelledby="form-dialog-title"
                    keepMounted
                >
                    <DialogTitle id="form-dialog-title" className={classes.formTitle}>
                        Welcome Back!
                    </DialogTitle>
                    <DialogContent className={classes.formContent}>
                        <form autoComplete="off" noValidate className={classes.formContainer} onSubmit={handleLogin} >
                            <TextField 
                                className={classes.fileInput}
                                name="username" 
                                variant="outlined" 
                                label="Username" 
                                fullWidth
                            
                                // onChange={(e) => setPostData({...postData, creator: e.target.value})}
                            />
                            <TextField 
                                className={classes.fileInput}
                                name="password" 
                                variant="outlined" 
                                label="Password" 
                                fullWidth
                                // value={postData.title}
                                // onChange={(e) => setPostData({...postData, title: e.target.value})}
                            />
                            <Button 
                                className={classes.buttonSubmit} 
                                variant="contained" 
                                size="large"
                                type="submit"
                                fullWidth
                            >
                                LOGIN
                            </Button>
                            <Button
                                className={classes.buttonClear} 
                                variant="contained" 
                                size="large"
                                onClick={handleCloseLogin}
                                fullWidth
                            >
                                CANCEL
                            </Button>
                        </form>
                    </DialogContent> 
                </Dialog>
            </Fade>
        </div>
    )
}

export default Header;