import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10),
    },
}))
const Feed = () => {
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            Feed
        </Container>
    );
};

export default Feed;