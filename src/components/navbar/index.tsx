import { useState, FC } from 'react';

import { Avatar, ListItem,ListItemButton, ListItemIcon, ListItemText, List, Typography, Box, SvgIcon, Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

import { Link } from 'react-router-dom';

import { NAV_LIST } from '../../constants'

import Drawer from './components/Drawer';


type map = {
    label: String,
    URL: any,
    icon: FC
};


const returnStyles = (open : boolean) => ({

    AvatarCard: {
        display: 'flex',
        opacity: open ? 1 : 0,
        transition: '.3s',
        padding: '60px 20px',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    Avatar: {
        width: 56,
        height: 56
    },

    Nickname: {
        color: '#F1F1F1',
        fontSize: '36px !important',
        paddingRight: '20px',
    },

    NavRow: {
        display: 'block',
        width: '90%',
        margin: '10px auto 10px'
    },

    NavButton: {
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
    },
    
    NavButtonIcon: {
        minWidth: 0,
        justifyContent: 'center',
    },

    NavRowLabel: {
        opacity: open ? 1 : 0,
        ml: open ? 3 : 0,
        transition: open ? 'opacity 1.2s' : 'unset',
        fontSize: '20px !important'
    },

    NavRowLabelTypography: {
        color: '#f1f1f1',
        fontSize: '22px !important'
    },

    NavFooter: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        opacity: open ? 1 : 0,
        transition: '.3s',
    },

    NavFooterButton: {
        width: 'fit-content',
        marginLeft: '10px',
        color: '#858688',
        letterSpacing: '4px',
        '&:hover': {
            backgroundColor: 'rgb(59,72,109,.5) !important',
            color: '#858688',
        },
    }

})

const useStyles = makeStyles( (open : boolean) => ({

    Drawer: {
        backgroundImage: 'linear-gradient(to right, rgba(4,4,4 ), rgba(4,4,4,.5)) !important',
        border: 'none !important',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    NavButton: {
        borderRadius: '10px !important',
        color: '#3b486d',
        '&:hover': {
            backgroundColor: 'rgb(59,72,109,.5) !important',
            color: '#3b486d',
        },
    },

    NavButtonSelected: {
        borderRadius: '10px !important',
        color: '#3b486d',
        backgroundColor: 'rgb(59,72,109,.3) !important',
        '&:hover': {
            backgroundColor: 'rgb(59,72,109,.5) !important',
            color: '#3b486d',
        },
    },

}));

  





const MiniDrawer: FC<{ currentURL : String, setAppState : any }> = (props) => {

  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () : void => {
    setOpen(true);
  };

  const handleDrawerClose = () : void => {
    setOpen(false);
  };

  const classes = useStyles(open);
  const styles = returnStyles(open);

  return (

        <Box
            onMouseEnter={() => {handleDrawerOpen();}}
            onMouseLeave={() => {handleDrawerClose();}}
        >
            <Drawer variant="permanent" open={open} >
                <Box className={classes.Drawer}>
                
                    <Box>
                        
                        <Box
                            sx={styles.AvatarCard}
                        >
                            <Avatar
                                alt="Daniel"
                                src="/static/images/avatar/1.jpg"
                                sx={styles.Avatar}
                            />

                            <Typography
                                variant="body2"
                                sx={styles.Nickname}
                            >
                                Daniel
                            </Typography>
                        </Box>

                        <List>
                        {NAV_LIST.map( (navItem : map, index : number ) => (
                            <Link
                                key={index} 
                                to={navItem.URL}
                                onClick={() => { props.setAppState((prevState: any) => ({...prevState, currentURL : navItem.URL })) }}
                                style={{ textDecoration : 'none' }}
                            >
                                <ListItem 
                                    sx={styles.NavRow}
                                    disablePadding 
                                >
                                    <ListItemButton
                                        className={ props.currentURL === navItem.URL ? classes.NavButtonSelected : classes.NavButton }
                                    >

                                        <ListItemIcon
                                            sx={styles.NavButtonIcon}
                                        >
                                            <SvgIcon component={navItem.icon} inheritViewBox sx={{ fill: '#f1f1f1' }} />
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={<Typography variant="body2" sx={styles.NavRowLabelTypography}>{navItem.label}</Typography>}
                                            sx={styles.NavRowLabel}
                                        />
                                        
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                        </List>
                        
                    </Box>
                        
                    <Box sx={styles.NavFooter}>
                        <Button variant="text" style={styles.NavFooterButton}>Language</Button>
                        <Button variant="text" style={styles.NavFooterButton}>Help</Button>
                        <Button variant="text" style={styles.NavFooterButton}>Exit</Button>
                    </Box>

                </Box>
            </Drawer>

    </Box>
  );
}

export default MiniDrawer;