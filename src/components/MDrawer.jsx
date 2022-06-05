import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';

import cv from '../docs/cv.pdf';
import routes from '../utils/routes';

class MDrawer extends React.Component {
  render() {
    const { open, onClose, isLight, setTheme, location } = this.props;

    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{ display: { xs: 'block', md: 'none' }, backdropFilter: 'blur(5px)' }}
        PaperProps={{ sx: { maxWidth: 280, width: 1 } }}
      >
        <Toolbar
          variant="dense"
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            justifyContent: 'space-between',
          }}
        >
          <Typography color="inherit" variant="h5" fontWeight="medium">
            Menu
          </Typography>
          <IconButton color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {routes.map((route) => (
            <ListItem
              key={route.path}
              className={location.pathname.includes(route.path) ? 'active' : ''}
              selected={location.pathname.includes(route.path)}
              disablePadding
              sx={{
                '&.active:before': {
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  content: '""',
                  height: 1,
                  position: 'absolute',
                  width: 4,
                },
              }}
            >
              <ListItemButton component={Link} to={route.path} onClick={onClose}>
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText
                  primary={route.text}
                  sx={{ color: 'text.primary' }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton component="a" href={cv} download="João Ferraz.pdf">
              <ListItemIcon sx={{ color: 'primary.main' }}>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText
                primary="Currículo"
                sx={{ color: 'text.primary' }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="https://github.com/jgabrielfes/portfolio" target="blank">
              <ListItemIcon sx={{ color: 'primary.main' }}>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText
                primary="Código"
                sx={{ color: 'text.primary' }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => setTheme(isLight ? 'dark' : 'light')}>
              <ListItemIcon sx={{ color: 'primary.main' }}>
                {isLight ? <DarkModeIcon /> : <LightModeIcon />}
              </ListItemIcon>
              <ListItemText
                primary={`Modo ${isLight ? 'escuro' : 'claro'}`}
                sx={{ color: 'text.primary' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

MDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isLight: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(MDrawer);
