import React, { Component } from 'react';
import CowList from './CowList.jsx';
import InsertCow from './InsertCow.jsx';
import HighlightedCow from './HighlightedCow.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = { cows: [], highlighted: null };
    this.getCows = this.getCows.bind(this);
    this.changeHighlighted = this.changeHighlighted.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios.get('http://localhost:1337/api/cows').then(({ data }) => {
      this.setState({ cows: data });
    });
  }

  changeHighlighted(cow) {
    if (JSON.stringify(cow) === JSON.stringify(this.state.highlighted)) {
      this.setState({ highlighted: null });
    } else {
      this.setState({ highlighted: cow });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Cow App</h1>
        <HighlightedCow highlighted={this.state.highlighted} />
        <InsertCow getCows={this.getCows} />
        <CowList
          cows={this.state.cows}
          changeHighlighted={this.changeHighlighted}
        />
      </React.Fragment>
    );
  }
}

export default App;
