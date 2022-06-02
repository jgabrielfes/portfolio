import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import PortfolioIcon from './PortfolioIcon';

import routes from '../utils/routes';
import underlineEffect from '../utils/underlineEffect';

class MAppBar extends React.Component {
  render() {
    const { isLight, setTheme, openDrawer, location } = this.props;

    return (
      <AppBar
        sx={{
          backgroundImage: 'none',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <Toolbar
          component="section"
          variant="dense"
          sx={{ justifyContent: 'space-between' }}
        >
          <Slide in direction="right" timeout={1000}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                py: 0,
                textTransform: 'none',
                '&:before': underlineEffect,
                '&:hover:before': { bgcolor: 'primary.dark', left: { xs: 5, sm: 69 }, right: 5 },
              }}
            >
              <PortfolioIcon
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  height: 48,
                  mr: 2,
                  width: 48,
                }}
              />
              <Typography fontSize={26} fontWeight="medium" noWrap>
                João Ferraz
              </Typography>
            </Button>
          </Slide>

          <Slide in direction="left" timeout={1000}>
            <ButtonGroup
              color="inherit"
              variant="text"
              size="large"
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              {routes.map((route) => (
                <Button
                  key={route.path}
                  className={location.pathname.includes(route.path) ? 'active' : ''}
                  component={Link}
                  to={route.path}
                  style={{ borderColor: 'rgba(0, 0, 0, 0.23)' }}
                  sx={{
                    '&.active': { bgcolor: 'primary.dark' },
                    '&:before': underlineEffect,
                    '&.active:before': { left: 5, right: 5 },
                    '&:hover:not(.active):before': { bgcolor: 'primary.dark', left: 5, right: 5 },
                  }}
                >
                  {route.text}
                </Button>
              ))}

              <Button
                component="a"
                startIcon={isLight ? <DarkModeIcon /> : <LightModeIcon />}
                onClick={() => setTheme(isLight ? 'dark' : 'light')}
                sx={{
                  '&:before': underlineEffect,
                  '&:hover:before': { bgcolor: 'primary.dark', left: 5, right: 5 },
                }}
              >
                {isLight ? 'Escuro' : 'Claro'}
              </Button>
            </ButtonGroup>
          </Slide>

          <Slide in direction="left" timeout={1000}>
            <IconButton
              color="inherit"
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                ml: 1,
              }}
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Slide>
        </Toolbar>
      </AppBar >
    );
  }
}

MAppBar.propTypes = {
  isLight: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(MAppBar);
