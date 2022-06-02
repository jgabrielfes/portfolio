import React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import MUILink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import bio from '../utils/bio';
import photo from '../images/photo.jpg';
import social from '../utils/social';

const PAPER_PROPS = {
  component: 'section',
  sx: { p: 2 },
};

class Home extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz - Home';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Grid container alignItems="flex-start" justifyContent="center" spacing={4}>
          <Grow in timeout={1000}>
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
            >
              <Avatar
                alt="Foto João Ferraz"
                src={photo}
                sx={{
                  border: 4,
                  borderColor: 'primary.main',
                  height: 1,
                  maxHeight: 256,
                  maxWidth: 256,
                  mx: 'auto',
                  width: 1,
                }}
              />
            </Grid>
          </Grow>

          <Grow in timeout={1000}>
            <Grid
              item
              container
              xs={12}
              sm={8}
              md={9}
              spacing={2}
            >
              <Grid item xs={12}>
                <Paper {...PAPER_PROPS}>
                  <Typography variant="h3" fontWeight="medium">
                    João Ferraz
                  </Typography>
                  <Typography color="text.secondary">
                    Estudante de Desenvolvimento Web Full-Stack | Trybe
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper {...PAPER_PROPS}>
                  <Typography align="justify" sx={{ textIndent: '1.2cm' }}>
                    João é um desenvolvedor web full-stack em formação pela <MUILink href="https://www.betrybe.com/" target="blank">Trybe</MUILink>,
                    já possuindo habilidades de front-end. Também é apaixonado por criar serviços/ferramentas digitais que auxiliem todos
                    os tipos de trabalho possíveis. Ele tem um talento especial no desenvolvimento de suas atividades, desde o planejamento e design
                    até a solução de problemas da vida real em código. Quando não está online, ele adora sair e se divertir com seus amigos.
                  </Typography>

                  <Button
                    component={Link}
                    to="/works"
                    variant="contained"
                    endIcon={<NavigateNextIcon />}
                    sx={{ mt: 2 }}
                  >
                    Meus Trabalhos
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Grow>
        </Grid>

        <Divider sx={{ my: { xs: 2, sm: 3 } }}>
          <Chip label="Bio" color="primary" />
        </Divider>

        <Grow in timeout={3000}>
          <Paper {...PAPER_PROPS}>
            {bio.map(({ year, text, subtext }, index) => (
              <Stack key={`bio-${index}`} direction="row" spacing={3} mt={index === 0 ? 0 : 1}>
                <Typography fontWeight="bold">{year}</Typography>
                <div>
                  <Typography>
                    {text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }} align="justify">
                    {subtext}
                  </Typography>
                </div>
              </Stack>
            ))}
          </Paper>
        </Grow>

        <Divider sx={{ my: { xs: 2, sm: 3 } }}>
          <Chip
            label="Eu ❤"
            color="primary"
          />
        </Divider>

        <Grow in timeout={3000}>
          <Paper {...PAPER_PROPS}>
            <Typography sx={{ textIndent: '1.2cm' }}>
              Esportes, músicas, filmes, animais, jogos...
            </Typography>

            <Button
              component={Link}
              to="/about"
              variant="contained"
              endIcon={<NavigateNextIcon />}
              sx={{ mt: 2 }}
            >
              Mais sobre mim
            </Button>
          </Paper>
        </Grow>

        <Divider sx={{ my: { xs: 2, sm: 3 } }}>
          <Chip
            label="Social – @jgabrielfes"
            color="primary"
          />
        </Divider>

        <Grow in timeout={3000}>
          <Grid
            container
            direction="row"
            spacing={3}
            justifyContent="center"
            component="section"
            p={2}
          >
            {social.map(({ href, icon }, index) => (
              <Grid key={`social-${index}`} item>
                <Fab color="primary" href={href} target="blank">
                  {icon({ sx: { fontSize: 40 } })}
                </Fab>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </>
    );
  }
}

export default Home;
