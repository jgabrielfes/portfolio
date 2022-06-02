import React from 'react';

class NotFound extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz';
  }

  render() {
    return (
      <div>Página não encontrada</div>
    );
  }
}

export default NotFound;
