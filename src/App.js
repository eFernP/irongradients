import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { gradients } from './data/colors';
import { checkColor } from './helpers/checkColor'

console.log(gradients);
class App extends Component {

  state = {
    gradients,
    error: ''
  }

  handleSubmit = (e, colors) => {
    e.preventDefault();
    const newGradient = [colors.from, colors.to];
    const fromCorrect = checkColor(colors.from);
    const toCorrect = checkColor(colors.to);

    if (fromCorrect && toCorrect) {
      let errorMessage = '';
      this.setState({
        gradients: [newGradient, ...this.state.gradients],
        error: errorMessage
      })
    } else {
      let errorMessage = 'Use the hexadecimal format "#000000"';
      this.setState({
        error: errorMessage
      })
    }
  }

  renderGradients() {
    return this.state.gradients.map((item, index) => {
      return <Card
        key={'id-' + index}
        from={item[0]}
        to={item[1]}
      />
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Irongradients</h1>
        <Form onSubmit={this.handleSubmit} />
        <p>{this.state.error}</p>
        <div className="body-gradients">
          <div className="gradients">
            {this.renderGradients()}
          </div>
        </div>
      </div>


    );
  }
}

export default App;
