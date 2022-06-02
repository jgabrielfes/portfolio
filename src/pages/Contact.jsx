import React from 'react';

class Contact extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz - Contato';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>Contato</div>
    );
  }
}

export default Contact;
