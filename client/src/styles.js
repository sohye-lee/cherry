import { makeStyles } from '@material-ui/core';


export default makeStyles(() => ({
    
    appBar: {
        padding: '15px 0 10px 0 ',
        fontFamily: 'Lato',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
        color: 'var(--Black)',
        boxShadow: 'none',
    
    },
    image: {
        margin: '0 20px',
    },
    heading: {
        fontFamily: ['Satisfy','cursive'],
        fontSize: '2.2rem',
        color: 'var(--Pink)',
    },
    subtitle: {
        fontFamily: ['Lato', 'sans-serif'],
        fontSize: '1.4rem',
        fontWeight: '200',
        margin: '0 20px',
    },
    bar: {
        height: '1px',
        backgroundColor: 'var(--Gray)',
        width: '100%',
        marginBottom: '20px',
    }


}))