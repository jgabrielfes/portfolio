import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import PortfolioIcon from './PortfolioIcon';

import cv from '../docs/cv.pdf';
import routes from '../utils/routes';
import underlineEffect from '../utils/underlineEffect';

class MAppBar extends React.Component {
  render() {
    const { elevate, isLight, setTheme, openDrawer, enqueueSnackbar, location } = this.props;
    console.log(cv);

    return (
      <AppBar
        elevation={elevate ? 4 : 0}
        sx={{
          bgcolor: elevate ? 'primary.main' : 'background.default',
          borderBottom: elevate ? 'none' : '1px solid',
          borderColor: 'action.selected',
          color: elevate ? 'primary.contrastText' : 'text.primary',
          transition: '250ms background-color',
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
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'inline-flex' } }}           >
              {routes.map((route) => (
                <Button
                  key={route.path}
                  className={location.pathname.includes(route.path) ? 'active' : ''}
                  color="inherit"
                  component={Link}
                  to={route.path}
                  sx={{
                    '&.active': { bgcolor: elevate ? 'primary.dark' : 'action.selected' },
                    '&:before': underlineEffect,
                    '&.active:before': { left: 5, right: 5 },
                    '&:hover:not(.active):before': { bgcolor: 'primary.dark', left: 5, right: 5 },
                  }}
                >
                  {route.text}
                </Button>
              ))}

              <Button
                color="inherit"
                component="a"
                href="cv.pdf"
                download="João Ferraz.pdf"
                startIcon={<DownloadIcon />}
                onClick={() => enqueueSnackbar('Seu download iniciará em instantes.', { variant: 'success' })}
                sx={{
                  '&:before': underlineEffect,
                  '&:hover:before': { bgcolor: 'primary.dark', left: 5, right: 5 },
                }}
              >
                Currículo
              </Button>

              <Button
                color="inherit"
                component="a"
                href="https://github.com/jgabrielfes/portfolio"
                target="blank"
                startIcon={<GitHubIcon />}
                sx={{
                  '&:before': underlineEffect,
                  '&:hover:before': { bgcolor: 'primary.dark', left: 5, right: 5 },
                }}
              >
                Código
              </Button>

              <Button
                color="inherit"
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
            </Stack>
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
  elevate: PropTypes.bool.isRequired,
  isLight: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(withSnackbar(MAppBar));
