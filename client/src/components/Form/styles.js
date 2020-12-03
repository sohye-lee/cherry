import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    formContainer: {
        border: '1px solid var(--Gray)',
        backgroundColor: 'var(--White)',
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    
    fileInput: {
        width: '100%',
        margin: '5px 0',
    },
    
    buttonSubmit: {
        margin: '10px 0',
    },
    buttonClear: {
        marginBottom: '10px',
    }

}));