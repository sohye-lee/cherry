import React, { useState } from 'react';
import { AppBar, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, Fade } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MakeForm from '../Form/Form';
import logo from '../../images/logo.png';
import useStyles from './styles';


const Header = ({ selectedId, setSelectedId }) => {
    const [ formOpen, setFormOpen ] = useState(false);

    const classes = useStyles();

    const toggleForm = () => setFormOpen(!formOpen);
    const handleCloseForm = () => setFormOpen(false);

    return (
        <div className={classes.header}>
            <AppBar className={classes.headerWrapper} position="static" color="inherit">
                <a href="/" className={classes.brandWrapper}>
                   <img className={classes.logo} src={logo} alt="logo" height="40" width="40" />
                    <Typography className={classes.brand} variant="h2" align="center">cherry</Typography>
                    <Typography className={classes.brandSubtitle} variant="h4" align="center">- cherish your moments</Typography>
                </a>
                <div className={classes.userIcons} >
                    <CreateIcon onClick={toggleForm} className={classes.userIcon}/>
                    <InsertEmoticonIcon className={classes.userIcon}/>
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
                        <MakeForm setFormOpen={setFormOpen}/>
                    </DialogContent> 
                    <DialogActions className={classes.formTitle}>
                        <Button onClick={handleCloseForm}>CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </Fade>
        </div>
    )
}

export default Header;