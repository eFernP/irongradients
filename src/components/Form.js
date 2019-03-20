import React, { Component } from 'react';

class Form extends Component {


  state = {
    from: '',
    to: ''
  }


  handleChange = (e) => {
    console.log('Change'+e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  // createGradient(from, to){
  //   return {backgroundImage: `linear-gradient(135deg, ${from} 10%, ${to} 100%)`}
  // }
  // createColor(color){
  //   return {color}
  // }

  render() {
    return (
      <form onSubmit={(event)=>{this.props.onSubmit(event, this.state)}}>
        <input
          name="from"
          value={this.state.from}
          placeholder='First color'
          onChange={this.handleChange}
        ></input>
        <input
          name="to"
          value={this.state.to}
          placeholder='Second color'
          onChange={this.handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
      // <div className="card">
      //   <div className="card-gradient" style={this.createGradient(this.props.from,this.props.to)}>
      //   </div>
      //   <div className="card-description" >
      //     <div className="card-color-from" style={this.createColor(this.props.from)}>{this.props.from}</div>
      //     <div className="card-color-to" style={this.createColor(this.props.to)}>{this.props.to}</div>
      //   </div>
      // </div>
    );
  }
}

export default Form;