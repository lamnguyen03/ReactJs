import React, { Component } from 'react'

export default class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      age:""
    };
  }
  myChangeHandler = (event)=>{
      let name =event.target.name;
      let age = event.target.age;
      this.setState({[name]:age});
  }
  render() {
    return <div>
        <form>
            <h1> Hello {this.state.fullName} {this.state.age}</h1>
            <p>Enter your name:</p>
            <input
                type= 'text'
                name ='fullName'
                onChange={this.myChangeHandler}
            />
            <p>Enter your age:</p>
            <input
                type='text'
                name='age'
                onChange={this.myChangeHandler}
            />
        </form>
    </div>;
  }
}
