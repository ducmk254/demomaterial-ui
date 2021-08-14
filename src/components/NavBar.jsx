import React,{useState} from 'react';
import {AppBar, Toolbar, Typography, InputBase, Badge,Avatar} from "@material-ui/core";
import { Search,Mail, Notifications, Cancel } from "@material-ui/icons";
import {alpha,makeStyles} from "@material-ui/core/styles"
const useStyle = makeStyles((theme)=>({
    toolbar:{
        display:"flex",
        justifyContent:"space-between",

    },
    logoLg:{
        display:"none", /* mặc định thẻ sẽ ẩn */
        [theme.breakpoints.up("sm")]:{ /* nếu kích cỡ màn hình lớn hơn sm thì cho hiện thẻ */
            display:"block",
        },
    },
    logoSm:{
        display:"block", /* mặc định thẻ được show */
        [theme.breakpoints.up("sm")]:{ /* nếu kích cỡ màn hình lớn hơn sm thì ẩn thẻ */
            display:"none"
        },
    },
    cancel:{
        cursor:"pointer",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        }
    },
    searchNavbar:{
        display:"flex",
        alignItems:"center",
        backgroundColor:alpha(theme.palette.common.white,0.1),
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.white,0.25)
        },
        borderRadius:theme.shape.borderRadius,
        padding:"5px",
        width:"40%",
        [theme.breakpoints.down("sm")]:{
            display:(props)=>props.open ? "flex" : "none",
            width:"70%"
        },
        transition:"all .4s"
    },
    input:{
        marginLeft:"5px",
        color:"white",
        flexGrow:"1",

    },
    icon:{
        display:(props)=>props.open ? "none" : "flex",
        transition:"all .4s",
        alignItems:"center",
        cursor: "pointer",
        padding:"5px",

    },
    badge:{
        marginRight:theme.spacing(2),
        backgroundColor:alpha(theme.palette.common.white,0),
        
    },
    searchIcon:{
        display:"none",
        alignItems:"center",
        marginRight:theme.spacing(2),
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            justifyContent:"flex-end",
        },

    },
}));
const NavBar = () => {
const [open,setOpen] = useState(false);
const classes = useStyle({open});

    return (
        <AppBar position="fixed" >
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    Mutosi Group
                </Typography>
                <Typography variant="h6" className={classes.logoSm} >
                    MTS-Gr
                </Typography>
                <div className={classes.searchNavbar}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
                </div>
                
                <div className={classes.icon}>
                    <Search className={classes.searchIcon} onClick={()=>{setOpen(true)}} />
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;