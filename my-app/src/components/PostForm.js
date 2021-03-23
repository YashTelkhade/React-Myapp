import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name:'',
             last_name:'',
             gender:''
        }
    }


    handleSubmit = e =>{
        axios.post("http://localhost:5000/customers",this.state).then(result => {
            console.log(result);
            console.log(this.props.history);
            
            this.props.history.push('/');
        })
        e.preventDefault()
    }
    
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.name,e.target.value);
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div> <label>First Name</label>
              <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}></input>
            </div>
            <div> <label>Last Name</label>
              <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}></input>
            </div>
            <div><label>Gender</label>
              <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange}></input>
            </div>
            <div>
            <input type="submit" value="Submit" /> 
             </div>
          </form>
            )
    }
}

export default PostForm
