import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.name}, Welcome to {this.props.city}.
                <p>I hope you are doing well</p>
            </div>
        )
    }
}

export default Welcome
