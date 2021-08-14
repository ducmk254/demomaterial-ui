import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            display:"none",
        }

    },
}))
const RightBar = () => {
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            Rightbar
        </Container>
    );
};

export default RightBar;