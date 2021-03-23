import React, { Component } from 'react'

 class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    changelogIn(){

        this.setState({

            isLoggedIn:true
        })

    }
    changelogout(){

        this.setState({

            isLoggedIn:false
        })

    }
    render() {

        if (this.state.isLoggedIn) {
            return (<div><h1 >Welcome Yash</h1>
                <button  onClick={()=>this.changelogout()}>Change Karo</button>
                </div>)
        } else {           
        return (
            <div>
                <h1>Welcome Guest</h1>
                <button  onClick={()=>this.changelogIn()}>Change Karo</button>
            </div>)
    }
}
}

export default UserGreetings
