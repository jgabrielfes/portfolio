import React from 'react';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

class NotFound extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz';
  }

  render() {
    return (
      <Slide in direction="right" timeout={500}>
        <section>
          <Typography variant="h3" noWrap>
            Error 404
          </Typography>
          <Typography mb={5} color="text.secondary">
            Página não encontrada.
          </Typography>
        </section>
      </Slide>
    );
  }
}

export default NotFound;
