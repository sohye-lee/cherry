import { makeStyles } from '@material-ui/core';


export default makeStyles(() => ({
    postsWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridColumnGap: '20px',
        margin: '0 auto',
    },


}));