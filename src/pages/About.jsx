import React from 'react';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

class About extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz - Sobre';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Slide in direction="right" timeout={500}>
          <section>
            <Typography variant="h3" noWrap>
              Sobre
            </Typography>
            <Typography mb={5} color="text.secondary">
              Veja mais algumas curiosidades sobre João.
            </Typography>
          </section>
        </Slide>
      </>
    );
  }
}

export default About;
