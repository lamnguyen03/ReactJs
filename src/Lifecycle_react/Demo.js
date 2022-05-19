import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
         super(props);
         this.state = { 
            name : 'Lam Nguyen' 
        };
    }
    componentWillMount() {
      console.log("componentWillMount da chay")
    }

    componentDidMount() {
        console.log("componentDidMount da chay")
    }
    
    render() {
        console.log("Ham render da duoc chay");
        return (
           <div>
              <button onClick={() =>  this.setState({name : 'Lam Lam'})}>Submit</button>
                <p>{this.state.name}</p>
            </div> 

        )
    }
}
export default Demo;
