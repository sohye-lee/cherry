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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: 'none',
    },
    logo: {
        margin: '0 20px 0 0',
    },
    brand: {
        fontFamily: ['Satisfy','cursive'],
        fontSize: '2.2rem',
        color: 'var(--Pink)',
        margin: '0 0 5px 0',
    },
    brandSubtitle: {
        fontFamily: ['Lato', 'sans-serif'],
        fontSize: '1.1rem',
        fontWeight: '300',
        margin: '0 20px',
        color: 'var(--DarkGray)',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    userIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'rgba(0,0,0,.5)',
    },
    userIcon: {
        fontSize: '2.2rem',
        marginLeft: '10px',
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
    }
}))