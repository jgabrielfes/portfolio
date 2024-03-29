import React from 'react';
import { SnackbarProvider } from 'notistack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Content from './components/Content';
import MAppBar from './components/MAppBar';
import MDrawer from './components/MDrawer';

const light = createTheme({
  palette: {
    background: { default: '#eee' },
    mode: 'light',
    primary: { main: '#62c' },
  },
});

const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#0cf' },
  },
});

const setMetaTheme = (theme) => document.querySelector('meta[name="theme-color"]')
  .setAttribute('content', theme === 'light' ? '#62c' : '#0cf');

class App extends React.Component {
  constructor() {
    super();
    this.handleTheme = this.handleTheme.bind(this);

    this.state = {
      elevateAppBar: document.documentElement.scrollTop > 10,
      scrollToTopButton: document.documentElement.scrollTop > 200,
      isDrawerOpen: false,
      theme: localStorage.theme
        || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    };
  }

  componentDidMount() {
    const { theme } = this.state;
    setMetaTheme(theme);
    window.addEventListener("scroll", () => {
      const { scrollToTopButton, elevateAppBar } = this.state;
      if (elevateAppBar !== (document.documentElement.scrollTop > 10)
        || scrollToTopButton !== (document.documentElement.scrollTop > 200)) {
        this.setState({
          elevateAppBar: document.documentElement.scrollTop > 10,
          scrollToTopButton: document.documentElement.scrollTop > 200,
        });
      }
    });
  }

  handleTheme(theme) {
    this.setState({ theme }, () => {
      localStorage.theme = theme;
      setMetaTheme(theme);
    });
  }

  render() {
    const { elevateAppBar, scrollToTopButton, isDrawerOpen, theme } = this.state;

    return (
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          preventDuplicate
        >
          <CssBaseline enableColorScheme />
          <MAppBar
            elevate={elevateAppBar}
            isLight={theme === 'light'}
            setTheme={this.handleTheme}
            openDrawer={() => this.setState({ isDrawerOpen: true })}
          />
          <Content scroll={scrollToTopButton} />
          <MDrawer
            open={isDrawerOpen}
            onClose={() => this.setState({ isDrawerOpen: false })}
            isLight={theme === 'light'}
            setTheme={this.handleTheme}
          />
          <section>
            <Typography align="center" variant="body2" color="text.disabled" sx={{ mb: 4, mt: 2 }}>
              © {new Date().getFullYear()} João Ferraz. Todos os direitos reservados.
            </Typography>
          </section>
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
}

export default App;
