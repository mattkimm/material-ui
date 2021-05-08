import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root : {
        backgroundColor : '#fff',
    },
    searchInput : {
        opacity : '0.6',
        padding : `0px ${theme.spacing(1)}px`,
        fontSize : '0.8rem',
        '&:hover' : {
            backgroundColor : '#f2f2f2'
        },
        '& .MuiSvgIcon-root' :{
            //marginRight : '8px',
            marginRight : theme.spacing(1)
        }
    },
 
    
}))

export default function Header() {

    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                      alignItems="center">
                    <Grid item>
                        <InputBase
                            placeholder = "Search topics"
                            startAdornment = {<SearchIcon fontSize="small"/>}
                            className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item sm>
                    </Grid>
                    <Grid item  >
                        <IconButton>
                            <Badge badgeContent = {4} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent = {3} color="primary">
                                <ChatBubbleOutlineIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                           <PowerSettingsNewIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
