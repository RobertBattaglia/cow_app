import React, { Component } from 'react';
import axios from 'axios';

class InsertCow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescrip = this.handleChangeDescrip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postCow();
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeDescrip(event) {
    this.setState({ description: event.target.value });
  }
  postCow() {
    axios
      .post('http://localhost:1337/api/cows', {
        name: this.state.name,
        description: this.state.description
      })
      .then(() => {
        this.props.getCows();
        this.setState({ name: '', description: '' });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <form>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <textarea
            id="description"
            className="input"
            type="textarea"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChangeDescrip}
          />
          <button onClick={this.handleSubmit}>Submit Cow</button>
        </form>
      </React.Fragment>
    );
  }
}

export default InsertCow;
