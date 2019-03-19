import React, { Component } from 'react';

class Card extends Component {
  
  createGradient(from, to){
    return {backgroundImage: `linear-gradient(135deg, ${from} 10%, ${to} 100%)`}
  }
  createColor(color){
    return {color}
  }
  
  render() {
    return (
      <div className="card">
        <div className="card-gradient" style={this.createGradient(this.props.from,this.props.to)}>
        </div>
        <div className="card-description" >
          <div className="card-color-from" style={this.createColor(this.props.from)}>{this.props.from}</div>
          <div className="card-color-to" style={this.createColor(this.props.to)}>{this.props.to}</div>
        </div>
      </div>
    );
  }
}

export default Card;

