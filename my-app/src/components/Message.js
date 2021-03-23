import React, { Component } from 'react'


const h2={
    color: "yellow",
    fontSize: "26px"
}

const h3={
    color: "orange",
    fontSize: "26px"
}


class Message extends Component {

    constructor() {
        super()
        this.state = {
             message:"Welcome Buddy"
        }
    }

    changeMessage(){

        this.setState({
            message:"Thanks for Coming to DUBAI"
        })
    }
    
    render() {
        return (
            <div style={this.state.message==="Thanks for Coming to DUBAI"? h2:h3}>
                <h1 >Hi, {this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Travel</button>
            </div>
        )
    }
}

export default Message
