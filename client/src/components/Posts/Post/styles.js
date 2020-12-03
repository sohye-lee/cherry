import { makeStyles } from '@material-ui/core';


export default makeStyles(() => ({
    wrapper: {
        minHeight: '300px',
        minWidth: '300px',
        padding: '15px',
        backgroundColor: 'var(--White)',
        margin: '20px',
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--Gray)',
    },
    title: {
        textAlign: 'center',
    }

}));