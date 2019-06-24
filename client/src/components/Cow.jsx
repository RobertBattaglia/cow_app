import React, { Component } from 'react';

class Cow extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, description: props.description };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeHighlighted(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <li onClick={this.handleClick}>{this.state.name}</li>
      </React.Fragment>
    );
  }
}

export default Cow;
