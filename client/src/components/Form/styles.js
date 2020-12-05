import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    formContainer: {
        // backgroundColor: 'var(--Smoke)',
        padding: '15px 0',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    
    fileInput: {
        width: '100%',
        margin: '5px 0',
        backgroundColor: 'var(--White)',
    },
    fileUpload: {
        width: '100%',
        margin: '5px 0',
    },
    buttonSubmit: {
        margin: '10px 0',
        backgroundColor: 'var(--Sky)',
        color: 'var(--White)',
    },
    buttonClear: {
        marginBottom: '10px',
        backgroundColor: 'var(--Pink)',
        color: 'var(--White)',
    }

}));