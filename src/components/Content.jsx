import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Home from '../pages/Home';
import WorkInfo from '../pages/WorkInfo';
import NotFound from '../pages/NotFound';

import routes from '../utils/routes';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      scroll: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scroll: document.documentElement.scrollTop });
    });
  }

  render() {
    const { scroll } = this.state;

    return (
      <>
        <Container sx={{ mt: 6, py: { xs: 2, sm: 3 } }}>
          <Switch>
            <Route path="/works/:work" component={WorkInfo} />
            {routes.map((route) => (
              <Route key={route.path} exact path={route.path} component={route.page} />
            ))}
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Zoom in={scroll > 200}>
          <Fab
            color="primary"
            size="small"
            sx={{
              bottom: 24,
              right: 24,
              position: 'fixed',
            }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </>
    );
  }
}

export default Content;
