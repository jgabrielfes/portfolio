import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { ReactComponent as Icon } from '../images/portfolio_icon.svg';

class PortfolioIcon extends React.Component {
  render() {
    const { sx } = this.props;

    return (
      <Box component={Icon} sx={sx} />
    );
  }
}

PortfolioIcon.propTypes = {
  sx: PropTypes.object.isRequired,
};

export default PortfolioIcon;
