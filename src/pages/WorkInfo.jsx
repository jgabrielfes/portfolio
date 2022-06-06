import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import MDialog from '../components/MDialog';

import { collaborations, works, trainingProjects } from '../utils/works';

const ALL_WORKS = [...collaborations, ...works, ...trainingProjects];

class WorkInfo extends React.Component {
  constructor() {
    super();
    this.handleDevTool = this.handleDevTool.bind(this);
    this.handleCloseToolDialog = this.handleCloseToolDialog.bind(this);

    this.state = {
      toolDialogOpen: false,
      selectedTool: {
        title: '',
        description: '',
        icon: <></>,
      },
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDevTool(tool) {
    this.setState({
      toolDialogOpen: true,
      selectedTool: {
        title: tool.name,
        description: tool.description,
        icon: tool.svg,
      },
    });
  }

  handleCloseToolDialog() {
    this.setState({ toolDialogOpen: false });
  }

  render() {
    const { history, match: { params: { work } } } = this.props;
    const { toolDialogOpen, selectedTool } = this.state;
    const workInfo = ALL_WORKS.find(({ path }) => path === work);

    if (!workInfo) return <Redirect to="/works" />

    return (
      <>
        <Slide in direction="right" timeout={500}>
          <Stack alignItems="center" component="section" direction="row" spacing={2} mb={5}>
            <IconButton size="large" onClick={() => history.push('/works')}>
              <ArrowBackIcon />
            </IconButton>
            <Stack>
              <Typography variant="h3" noWrap>
                {workInfo.title}
              </Typography>
              <Typography color="text.secondary">
                {workInfo.date}
              </Typography>
            </Stack>
          </Stack>
        </Slide>

        <Grow in timeout={1000}>
          <Paper component="section" sx={{ mb: { xs: 2, sm: 3 }, mx: 'auto', p: 2, width: 'fit-content' }}>
            <img
              width="100%"
              src={workInfo.image}
              alt={workInfo.title}
            />
          </Paper>
        </Grow>

        <Grow in timeout={2000}>
          <Paper component="section" sx={{ p: 2 }}>
            <Typography align="justify" sx={{ mb: 2, textIndent: '1.2cm' }}>
              {workInfo.text}
            </Typography>

            {workInfo.repo && (
              <Stack alignItems="center" direction="row" spacing={1}>
                <Typography variant="overline" sx={{ mt: 0.4 }}>
                  Repositório:
                </Typography>
                <Link href={workInfo.repo} target="blank">{workInfo.repo}</Link>
              </Stack>
            )}

            {workInfo.url && (
              <Stack alignItems="center" direction="row" spacing={1}>
                <Typography variant="overline" sx={{ mt: 0.4 }}>
                  Deploy:
                </Typography>
                <Link href={workInfo.url} target="blank">{workInfo.url}</Link>
              </Stack>
            )}

            <Stack alignItems="center" direction="row" spacing={0.5}>
              <Typography variant="overline" sx={{ mr: 0.5, mt: 0.4 }}>
                Tecnologias utilizadas:
              </Typography>
              {workInfo.devTools.map((tool) => (
                <Chip key={tool} label={tool} />
              ))}
            </Stack>
          </Paper>
        </Grow>

        <MDialog tool={selectedTool} open={toolDialogOpen} onClose={this.handleCloseToolDialog} />
      </>
    );
  }
}

WorkInfo.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      work: PropTypes.string,
    }),
  }).isRequired,
};

export default WorkInfo;
