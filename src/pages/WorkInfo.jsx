import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { collaborations, works, trainingProjects } from '../utils/works';

const ALL_WORKS = [...collaborations, ...works, ...trainingProjects];

class WorkInfo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { match: { params: { work } } } = this.props;
    const workInfo = ALL_WORKS.find(({ path }) => path === work);

    if (!workInfo) return <Redirect to="/works" />

    return (
      <span>{work}</span>
    );
  }
}

WorkInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      work: PropTypes.string,
    }),
  }).isRequired,
};

export default WorkInfo;
