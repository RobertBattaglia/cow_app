import React, { Component } from 'react';

class Cow extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, description: props.description };
  }

  render() {
    return (
      <React.Fragment>
        <li>{this.state.name}</li>
      </React.Fragment>
    );
  }
}

export default Cow;
