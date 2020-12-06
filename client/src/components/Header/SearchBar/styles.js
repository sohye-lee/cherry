import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    searchWrapper: {
        flexBasis: '50%',
        width: '400px',
        position: 'relative',
        height: '40px',
        [theme.breakpoints.down('sm')]: {
            flexBasis: '60%',
        }
    },
    searchBar: {
        width: '100%',
        height: '100%',
        borderRadius: '15px',
        border: 'none',
        outline: 'none',
        border: '1px solid var(--Gray)',
        backgroundColor: 'var(--White)',
        color: 'var(--DarkGray)',
        fontSize: '.9rem',
        padding: '3px 5px 5px 40px',
        textTransform: 'lowercase',
    },
    searchIcon: {
        position: 'absolute',
        top: '8px',
        left: '8px',
        fontSize: '1.5rem',
        color: 'var(--Gray)',
    }
}))