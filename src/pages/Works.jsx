import React from 'react';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import WorkCard from '../components/WorkCard';

import { collaborations, works, trainingProjects } from '../utils/works';

class Works extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz - Trabalhos';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Slide in direction="right" timeout={500}>
          <section>
            <Typography variant="h3" noWrap>
              Trabalhos
            </Typography>
            <Typography mb={5} color="text.secondary">
              Confira alguns dos trabalhos/projetos que João realizou logo abaixo!
            </Typography>
          </section>
        </Slide>

        <Divider sx={{ mb: 3 }}>
          <Chip label="Trabalhos" color="primary" />
        </Divider>

        <Grow in timeout={1000}>
          <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" component="section">
            {works.map((work) => (
              <Grid key={work.title} item xs={12} sm={6} md={4}>
                <WorkCard
                  path={work.path}
                  title={work.title}
                  subheader={work.date}
                  img={work.image}
                >
                  {work.description}
                </WorkCard>
              </Grid>
            ))}
          </Grid>
        </Grow>

        <Divider sx={{ my: 3 }}>
          <Chip label="Colaborações" color="primary" />
        </Divider>

        <Grow in timeout={2000}>
          <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" component="section">
            {collaborations.map((work) => (
              <Grid key={work.title} item xs={12} sm={6} md={4}>
                <WorkCard
                  path={work.path}
                  title={work.title}
                  subheader={work.date}
                  img={work.image}
                >
                  {work.description}
                </WorkCard>
              </Grid>
            ))}
          </Grid>
        </Grow>

        <Divider sx={{ my: 3 }}>
          <Chip label="Projetos de Treinamento" color="primary" />
        </Divider>

        <Grow in timeout={3000}>
          <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" component="section">
            {trainingProjects.map((work) => (
              <Grid key={work.title} item xs={12} sm={6} md={4}>
                <WorkCard
                  path={work.path}
                  title={work.title}
                  subheader={work.date}
                  img={work.image}
                >
                  {work.description}
                </WorkCard>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </>
    );
  }
}

export default Works;
