import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    header: {
        position:'fixed',
        width:'100%',
        top:0,
        left:0,
        zIndex:100,
        backgroundColor:'var(--Smoke)',
        borderBottom: '0.5px solid var(--Gray)',
    },
    headerWrapper: {
        maxWidth: '100vw',
        margin: '0 auto',
        padding: '15px 10% 10px 10% ',
        fontFamily: 'Lato',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        color: 'var(--Black)',
        boxShadow: 'none',
    },
    brandWrapper: {
        flexBasis: '35%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            flexBasis: '20%',
        }
    },
    logo: {
        margin: '0 15px 0 0',
    },
    brand: {
        fontFamily: ['Satisfy','cursive'],
        fontSize: '2.2rem',
        color: 'var(--Pink)',
        margin: '0 0 5px 0',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    brandSubtitle: {
        fontFamily: ['Lato', 'sans-serif'],
        fontSize: '1rem',
        fontWeight: '300',
        marginLeft: '10px',
        color: 'var(--DarkGray)',
        [theme.breakpoints.down('lg')]: {
            fontSize: '.8rem',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    userIcons: {
        flexBasis: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'rgba(0,0,0,.5)',
    },
    userIcon: {
        fontSize: '2.2rem',
        marginLeft: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.8rem',
            marginLeft: '10px',
        }
    },
    formWrapper: {
        backgroundColor: 'rgba(255,255,255,.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formTitle: {
        backgroundColor: 'var(--Smoke)',
        color: 'var(--Pink)',
        textTransform: 'uppercase',
    },
    formContent: {
        borderTop: '1px solid var(--Gray)',
        borderBottom: '1px solid var(--Gray)',
        backgroundColor: 'var(--Smoke)',
    },
    formContainer: {
        padding: '15px 0',
    },
    fileInput: {
        width: '100%',
        margin: '5px 0',
        backgroundColor: 'var(--White)',
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
}))