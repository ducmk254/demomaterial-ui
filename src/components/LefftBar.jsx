import { Container, Typography } from '@material-ui/core';
import { Camera, Group, Home, PeopleAlt } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10),
        backgroundColor:"#80d8ff",
        height:"100vh",
        borderRight:"1px solid #ccc",
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom: theme.spacing(4),
        cursor:"pointer"
    },
    icon:{
        [theme.breakpoints.up("xs")]:{
            marginRight: '10px',
        },
        border:"1px solid #999"
    },
    text:{
        [theme.breakpoints.down("xs")]:{
            display:"none",
        },
        border:"1px solid #888"
    }
}));

const LefftBar = () => {
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <PeopleAlt className={classes.icon} />
                <Typography className={classes.text}>Tất cả thành viên</Typography>
            </div>
            <div className={classes.item}>
                <Group className={classes.icon} />
                <Typography className={classes.text}>Quản lý nhóm</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon} />
                <Typography className={classes.text}>Quản lý tổ chức</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Ghi nhận</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Bạn bè</Typography>
            </div>


        </Container>
    );
};

export default LefftBar;