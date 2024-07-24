import { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Sidebar } from '..';
import useStyles from './styles';

const Navbar = () => {
  const [mobileOpen, setmobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)')
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position='fixed' sx={{ backgroundColor: '#6a1b9a' }}>
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton 
            color='inherit'
            edge='start' 
            style={{ outline: 'none' }}
            onClick={() => setmobileOpen((prevMobileOpen) => !prevMobileOpen)}
            className={ classes.menuButton }
          >
            <Menu />
          </IconButton>
        )}
        <IconButton color='inherit' sx={{ ml: 1}} onClick={() => {}}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {!isMobile && "Search here"}
        <div>
          {!isAuthenticated ? (
            <Button color='inherit' onClick={() => {}}>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button color='inherit' component={Link} to={`/profile/:id`} className={classes.linkButton} onClick={() => {}}>
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar style={{ width: 30, height: 30 }} alt="Profile" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Favatar-placeholder.html&psig=AOvVaw1zSu7KYjLhmMofyBEohbUY&ust=1719515014172000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCjsN76-YYDFQAAAAAdAAAAABAE" />
            </Button>
          )}
        </div>
        {isMobile && "Search here"}
      </Toolbar>
      </AppBar>
      <div>
          <nav className={classes.drawer}>
              {isMobile ? (
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={() => setmobileOpen((prevMobileOpen) => !prevMobileOpen)}
                  classes={{ paper: classes.drawerPaper }}
                  ModalProps={{ keepMounted: true }}
                >
                  <Sidebar setmobileOpen={setmobileOpen} />
                </Drawer>
              ) : (
                <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                  <Sidebar setmobileOpen={setmobileOpen} />
                </Drawer>
              )}
          </nav>
          </div>
    </>
  )
}

export default Navbar;