import React from 'react';

class CV extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz - Currículo';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>Currículo</div>
    );
  }
}

export default CV;
