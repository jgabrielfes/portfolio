import React from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

class Contact extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      submitted: false,
      submitting: false,
      done: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  }

  componentDidMount() {
    document.title = 'João Ferraz - Contato';
    window.scrollTo(0, 0);
  }

  handleInput({ target }) {
    this.setState(({ form }) => ({
      form: {
        ...form,
        [target.name]: target.value,
      },
    }));
  }

  handleSubmit(event) {
    const { enqueueSnackbar } = this.props;
    const { form } = this.state;
    event.preventDefault();
    this.setState({ submitted: true });
    if (Object.values(form).every((value) => value) && EMAIL_REGEX.test(form.email)) {
      this.setState({ submitting: true });
      axios({
        method: 'POST',
        url: process.env.REACT_APP_CONTACT_ENDPOINT_URL,
        data: form,
      }).then(() => {
        this.setState({ submitting: false, done: true });
      }).catch(() => {
        enqueueSnackbar('Ops! Houve um erro durante o envio de sua mensagem.', { variant: 'error' });
        this.setState({ submitting: false });
      });
    }
  }

  render() {
    const { submitted, submitting, done, form } = this.state;

    return (
      <>
        <Slide in direction="right" timeout={500}>
          <section>
            <Typography variant="h3" noWrap>
              Contato
            </Typography>
            <Typography mb={5} color="text.secondary">
              Entre em contato com João preenchendo o formulário abaixo, ou envie diretamente um <Link href="mailto:jgabrielfes@gmail.com" target="blank">e-mail</Link>!
            </Typography>
          </section>
        </Slide>

        {done ? (
          <Slide in direction="right" timeout={500}>
            <Alert variant="filled" sx={{ width: 'fit-content' }}>
              Mensagem enviada com sucesso!
            </Alert>
          </Slide>
        ) : (
          <Grow in timeout={1000}>
            <Paper
              component="section"
              sx={{
                maxWidth: 750,
                mx: 'auto',
                p: 2,
              }}
            >
              <Grid container spacing={3} component="form" onSubmit={this.handleSubmit}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    label="Nome"
                    value={form.name}
                    error={submitted && form.name.length === 0}
                    disabled={submitting}
                    fullWidth
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="email"
                    name="email"
                    label="E-mail"
                    value={form.email}
                    error={submitted && (form.email.length === 0 || !EMAIL_REGEX.test(form.email))}
                    disabled={submitting}
                    fullWidth
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="subject"
                    label="Assunto"
                    value={form.subject}
                    error={submitted && form.subject.length === 0}
                    disabled={submitting}
                    fullWidth
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Mensagem"
                    value={form.message}
                    error={submitted && form.message.length < 25}
                    disabled={submitting}
                    multiline
                    rows={4}
                    fullWidth
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={submitting}
                    sx={{
                      height: 36.5,
                      maxWidth: 250,
                      mt: 3,
                      width: 1,
                    }}
                  >
                    {submitting ? <CircularProgress size={16} /> : 'Enviar'}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grow>
        )
        }
      </>
    );
  }
}

Contact.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withSnackbar(Contact);
