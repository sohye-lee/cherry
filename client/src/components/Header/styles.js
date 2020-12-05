import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    header: {
        position:'fixed',
        width:'100vw',
        top:0,
        left:0,
        zIndex:100,
        backgroundColor:'var(--Smoke)',
        borderBottom: '0.5px solid var(--Gray)',
    },
    headerWrapper: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '15px 0 10px 0 ',
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
    },
    logo: {
        margin: '0 20px',
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
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
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