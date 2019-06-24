import React, { Component } from 'react';
import CowList from './CowList.jsx';
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
        <CowList cows={this.state.cows} />
      </React.Fragment>
    );
  }
}

export default App;
