import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import { Tabs, useTheme, Tab } from '@mui/material';
import { StepButtonClassKey } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import DrawComponent from './DrawComponent';

const SLIconSvg = <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="50"><path d="M30.3 41.703a23.845 23.845 0 0 0 16.972-7.03 23.845 23.845 0 0 0 7.03-16.972v-.493h-2.815v.493c0 5.66-2.204 10.98-6.205 14.982A21.049 21.049 0 0 1 30.3 38.888c-5.66 0-10.98-2.203-14.982-6.205A21.048 21.048 0 0 1 9.113 17.7v-.493H6.298v.493a23.844 23.844 0 0 0 7.03 16.972 23.845 23.845 0 0 0 16.972 7.03zm0-38.888c8.208 0 14.886 6.678 14.886 14.886 0 8.209-6.678 14.887-14.886 14.887-8.208 0-14.887-6.678-14.887-14.887 0-8.208 6.679-14.886 14.887-14.886zm0 32.588c4.728 0 9.173-1.842 12.517-5.185A17.586 17.586 0 0 0 48 17.701c0-4.728-1.84-9.173-5.184-12.516A17.586 17.586 0 0 0 30.3 0a17.586 17.586 0 0 0-12.517 5.185A17.586 17.586 0 0 0 12.6 17.7c0 4.729 1.84 9.174 5.184 12.517A17.586 17.586 0 0 0 30.3 35.403zm27.485-18.195v.493c0 7.342-2.859 14.244-8.05 19.435-5.191 5.191-12.094 8.05-19.435 8.05-7.341 0-14.244-2.859-19.435-8.05-5.191-5.191-8.05-12.093-8.05-19.435v-.493H0v.493c0 4.09.801 8.058 2.382 11.795a30.197 30.197 0 0 0 6.493 9.63A30.2 30.2 0 0 0 30.3 48.002a30.2 30.2 0 0 0 21.425-8.875 30.199 30.199 0 0 0 6.493-9.63A30.113 30.113 0 0 0 60.6 17.7v-.493h-2.815zm-17.02 4.213H35.53v-11.22h-3.032v13.926h8.267v-2.706zm-15.191.247c-2.36 0-3.993-1.543-3.993-1.543l-1.686 2.074s2.178 2.12 5.621 2.12c3.07 0 5.055-1.686 5.055-4.294 0-2.732-2.168-3.636-4.511-4.205-2.718-.65-2.85-1.101-2.85-1.843 0-.812.686-1.316 1.791-1.316 1.732 0 3.085 1.013 3.085 1.013l1.707-2.104s-1.748-1.558-4.754-1.558c-2.837 0-4.744 1.678-4.744 4.175 0 2.64 1.71 3.57 4.664 4.284 2.696.623 2.696 1.162 2.696 1.785 0 .87-.798 1.412-2.081 1.412z" fill="white" fillRule="evenodd"></path></svg>

const pages = ['Home', 'About', 'Contact', "Login"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavbarComponent = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme()
    const appBarRef = React.useRef();
    const [appBarWidth, setappBarWidth] = React.useState();
    const [menuItemClicked, setMenuItemClicked] = React.useState();



  
   
    const handleDrawerToggle = () => {
        // console.log(appBarRef.current.clientWidth)
      setappBarWidth(65);
      setMobileOpen(!mobileOpen);
    };
    
  
    const container = window !== undefined ? () => window().document.body : undefined;




  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar ref={appBarRef} position="static" sx={{width:"100vw", height:"auto", zIndex: Number(theme.zIndex.drawer) + 5000}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
            {/* desktop left div */}
          <Typography
            variant="div"
            noWrap

            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {SLIconSvg}
          </Typography>

        {/* left div */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* MObile middel div */}
          <Typography
            variant="div"
            sx={{
            
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              width:"0"
   
            }}
          >
            {SLIconSvg}
          </Typography>

          {/* menu desktop mode */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* <Tabs textColor='inherit' value={menuItemClicked} onChange={(e, val) => setMenuItemClicked(val)} indicatorColor={'secondary'}>
            {pages.map((page, index) => (
              <Tab label={page} key={index}/>
            ))}

            </Tabs> */}

            {pages.map((page, index) => (
              <Button key={index}>{page}</Button>
            ))}
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 , mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'  }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: "5%", display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>


         {/* mobile */}
          <Box component="nav">
        
        <Drawer
        
          anchor='top'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%", marginTop:`${appBarWidth}px`},
          }}
        >
          {DrawComponent(handleDrawerToggle, pages, settings)}
        </Drawer>
      </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarComponent;
