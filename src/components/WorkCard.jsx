import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

class WorkCard extends React.Component {
  render() {
    const { path, title, subheader, img, children } = this.props;

    return (
      <Card>
        <CardActionArea component={Link} to={`/works/${path}`}>
          <CardHeader title={title} subheader={subheader} />
          <CardMedia
            component="img"
            image={img}
            alt="Teste"
            sx={{ pointerEvents: 'none' }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card >
    );
  }
}

WorkCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default WorkCard;
