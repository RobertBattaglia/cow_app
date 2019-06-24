import React, { Component } from 'react';
import CowList from './CowList.jsx';
import InsertCow from './InsertCow.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = { cows: [] };
    this.getCows = this.getCows.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }
  getCows() {
    axios.get('http://localhost:1337/api/cows').then(({ data }) => {
      this.setState({ cows: data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Cow App</h1>
        <InsertCow getCows={this.getCows} />
        <h3>Cow List</h3>
        <CowList cows={this.state.cows} />
      </React.Fragment>
    );
  }
}

export default App;
