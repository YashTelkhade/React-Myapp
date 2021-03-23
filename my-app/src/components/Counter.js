import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

        this.incrementFive=this.incrementFive.bind(this)
    }

    incrementFive(){
        this.setState({
            count:this.state.count+5
        },
        ()=>console.log(this.state.count)
         )
    }
    
    render() {
        return (
            <div>
                <h1>The Count value is {this.state.count}</h1>
                <button onClick={this.incrementFive}>Increment By Five</button>
            </div>
        )
    }
}

export default Counter
