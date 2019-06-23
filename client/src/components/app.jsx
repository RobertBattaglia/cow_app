import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = { cows: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:1337/api/cows').then(({ data }) => {
      this.setState({ cows: data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.cows.map(cow => {
            return <li>{cow.NAME}</li>;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
