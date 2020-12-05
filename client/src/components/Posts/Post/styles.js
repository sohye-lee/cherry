import { FormHelperText, makeStyles } from '@material-ui/core';


export default makeStyles(() => ({
    postWrapper: {
        height: '500px',
        width: '400px',
        minWidth: '350px',
        backgroundColor: 'var(--White)',
        margin: '5px auto',
        position: 'relative',
        fontFamily: ['Ubuntu', 'sans-serif'],
        backgroundColor: 'var(--White)',
        borderRadius: '0',
        border: '0.5px solid var(--Gray)',
        boxShadow: 'none',
        borderRadius: '3px',
        '&:hover $postMessage': {
            display: 'block',
        },
        '&:hover $postImage': {
            backgroundBlendMode: 'darken',
        },
    },
    postImage: {
        height: 0,
        paddingTop: '100%',
        backgroundColor: 'rgba(0,0,0, .5)',
        transition: 'all 350ms ease',
    },
    postOverlay: {
        position: 'absolute',
        top: '15px',
        left: '15px',
        color: 'var(--White)',
    },
    // postOverlay2: {
    //     position: 'absolute',
    //     top: '15px',
    //     right: '15px',
    //     backgroundColor: 'none',
    // },
    postMoreBtn: {
        background: 'none',
        border: 'none',
    },
    postTags: {
       position: 'absolute',
       bottom: '15px',
       left: '15px',
       width: '45%',
    },
    postTitle: {
        textAlign: 'left',
    },
    postActions: {
        position: 'absolute',
        bottom: '3px',
        right: '3px',
        display: 'flex',
        flexDirection: 'row',
    },
    postIconWrapper: {
        width: '30px',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: 'none',
        background: 'none',
        outline: 'none',
    },
    postIcon: {
        fontSize: '2.1rem',
        padding: '5px',
        fontWeight: '100',
        borderRadius: '50%',
        transition: 'all 350ms ease',
        '&:hover': {
            color: 'white',
            backgroundColor: 'rgba(100,100,100,.7)'
        },
    },
    postMessageWrapper: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20%',
        color: 'var(--white)',
        transition: 'all 350ms ease-in',
    },
    postMessage: {
        display: 'none',
        width: '80%',
        height: '50%',
        overflow: 'auto',
        color: 'var(--White)',
    },
    alertTitle: {
        margin: '30px 30px 0 30px',
    },
    alertBtns: {
        margin: '30px',
    }
}));