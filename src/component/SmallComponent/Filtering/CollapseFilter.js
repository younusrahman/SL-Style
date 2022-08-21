import { ButtonBase, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Collapse from '@mui/material/Collapse';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChecboxGroup from './ChecboxGroups';
// import RadioGroups from './RadioGroups';
import InputsGroups from './InputsGroups';



// -----------------------


import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';




import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'; import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useTheme } from '@mui/material';
import SelectGroup from './SelectGroup';


export default function CollapseFilter() {
    const [open, setOpen] = React.useState(false);
  return (
    <div className='m-10 p-2 ' style={{ border:"solid 0.5px #c4c4c4" , borderRadius: "3px" }}>

    <ListItemButton  onClick={() => setOpen(!open)}>
        <ListItemIcon>
            <FilterListIcon />
        </ListItemIcon>
        <ListItemText primary="Customize travel filter" sx={{ alignItems: "center" }} />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ChecboxGroup/>
            
            <InputsGroups/>
          
        </List>

    </Collapse>
</div>
  )
}
