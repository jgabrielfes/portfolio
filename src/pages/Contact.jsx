import React from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
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

const FORM_INPUT_OPTIONS = [
  {
    xs: 12, sm: 6, name: 'name', label: 'Nome', multiline: false,
    errorCondition: (value) => value.length === 0,
    errorText: 'Insira seu nome',
  },
  {
    xs: 12, sm: 6, name: 'email', label: 'E-mail', multiline: false,
    errorCondition: (value) => value.length === 0 || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value),
    errorText: 'Insira um e-mail válido',
  },
  {
    xs: 12, name: 'subject', label: 'Assunto', multiline: false,
    errorCondition: (value) => value.length === 0,
    errorText: 'Forneça o assunto desta mensagem',
  },
  {
    xs: 12, name: 'message', label: 'Mensagem', multiline: true, rows: 4,
    errorCondition: (value) => value.length < 25,
    errorText: 'Esta mensagem é muito pequena',
  },
];

class Contact extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleRecaptcha = this.handleRecaptcha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptcha = React.createRef(null);

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

  handleRecaptcha(token) {
    const { enqueueSnackbar } = this.props;
    const { form } = this.state;
    if (token) {
      axios({
        method: 'POST',
        url: process.env.REACT_APP_CONTACT_ENDPOINT_URL,
        data: { ...form, 'g-recaptcha-response': token },
      }).then(() => {
        this.setState({ submitting: false, done: true });
      }).catch(() => {
        this.recaptcha.current.reset();
        enqueueSnackbar('Ops! Houve um erro durante o envio de sua mensagem.', { variant: 'error' });
        this.setState({ submitting: false });
      });
    }
  }

  handleSubmit(event) {
    const { enqueueSnackbar } = this.props;
    const { form } = this.state;
    event.preventDefault();
    this.setState({ submitted: true });
    if (FORM_INPUT_OPTIONS.some(({ name, errorCondition }) => errorCondition(form[name]))) {
      enqueueSnackbar('Preencha o formulário corretamente.', { variant: 'error' });
    } else {
      this.setState({ submitting: true });
      this.recaptcha.current.execute();
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
          <>
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
                  {FORM_INPUT_OPTIONS.map((option) => (
                    <Grid key={option.name} item xs={option.xs} sm={option.sm}>
                      <TextField
                        name={option.name}
                        label={option.label}
                        value={form[option.name]}
                        error={submitted && option.errorCondition(form[option.name])}
                        helperText={submitted && option.errorCondition(form[option.name]) ? `* ${option.errorText}` : ''}
                        disabled={submitting}
                        multiline={option.multiline}
                        rows={option.rows}
                        fullWidth
                        onChange={this.handleInput}
                      />
                    </Grid>
                  ))}

                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={submitting}
                      sx={{
                        height: 36.5,
                        maxWidth: 250,
                        width: 1,
                      }}
                    >
                      {submitting ? <CircularProgress size={16} /> : 'Enviar'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grow>

            <ReCAPTCHA
              ref={this.recaptcha}
              theme={localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')}
              size="invisible"
              sitekey="6Lf9qkwgAAAAAOfc3iok0QqRCwXqg_w8D_Gw3lL6"
              onChange={this.handleRecaptcha}
            />
          </>
        )}
      </>
    );
  }
}

Contact.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default withSnackbar(Contact);
