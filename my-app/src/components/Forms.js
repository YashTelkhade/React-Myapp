import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '', 
          age:''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeage = this.handleChangeage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleChangeage(event) {
        this.setState({age: event.target.value});        
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value +" with age" + this.state.age);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :- &emsp;  
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <label>
            Age :- &emsp;  
            <input type="text" value={this.state.age} onChange={this.handleChangeage}></input>
          </label>
          &emsp;
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Forms
    