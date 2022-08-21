import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';




import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useTheme } from '@mui/material';


export default function DrawComponent(handleDrawerToggle, navItems, settings){
  const [open, setOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ textAlign: 'center', width:"auto", zIndex: 1}} >
      <List onClick={handleDrawerToggle}>
        {navItems.map((item , index) => (
          <ListItemButton key={index}>
        <ListItemIcon>
          <KeyboardDoubleArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItemButton>
        ))}
      </List>
      <Divider />
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="User Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        {settings.map((item, index) => (
          <ListItemButton sx={{ pl: 4 }} key={index}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>))}

        </List>
        
      </Collapse>
    </Box>
  )
}




