import React from 'react';

class About extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz - Sobre';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>Sobre</div>
    );
  }
}

export default About;
