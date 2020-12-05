import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    postWrapper: {
        width: '370px',
        maxWidth: '85vw',
        height: '450px',
        backgroundColor: 'var(--White)',
        margin: '5px auto',
        position: 'relative',
        fontFamily: ['Ubuntu', 'sans-serif'],
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
        paddingTop: '90%',
        backgroundColor: 'rgba(0,0,0, .5)',
        transition: 'all 350ms ease',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '95%',
        }
    },
    postOverlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        padding: '15px',
        color: 'var(--White)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'top',
    },
    postInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    postMoreBtn: {
        background: 'none',
        border: 'none',
    },
    postTags: {
       position: 'absolute',
       bottom: '15px',
       left: '15px',
       width: '35%',
       maxHeight: '10%',
       fontSize: '.7rem',
       overflow: 'hidden',
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
    postLike: {
        fontWeight: '300',
        color: 'var(--Pink)',
        transition: 'all 300ms ease',
        '&:hover': {
            fontWeight: '600',
        }
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
            color: 'var(--Pink)',
            backgroundColor: 'rgba(100,100,100,.2)'
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
        margin: '20px 20px 0 20px',
    },
    alertBtns: {
        margin: '20px',
    }
}));