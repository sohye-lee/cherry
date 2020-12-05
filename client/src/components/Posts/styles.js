import { makeStyles } from '@material-ui/core';


export default makeStyles(() => ({
    postsWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gridColumnGap: '3px',
        margin: '0 auto',
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
}));