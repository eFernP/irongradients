import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import { gradients } from './data/colors';

console.log(gradients);
class App extends Component {

  renderGradients() {
    return gradients.map(item => {
      return <Card
        from={item[0]}
        to={item[1]}
      />
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Irongradients</h1>
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
