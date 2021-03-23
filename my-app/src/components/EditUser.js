import axios from 'axios'
import React, { Component } from 'react'

class EditUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name:'',
             last_name:'',
             gender:''
        }
    }

    componentDidMount(prevProps,prevState) {
        axios.get("http://localhost:5000/customers/" + this.props.match.params.id)
        .then((response) => {
            this.setState({
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                gender: response.data.gender
            });
        }).catch((err) => {
            console.log(err);
        });
    } 


    handleSubmit = e =>{
        e.preventDefault()
        axios.patch("http://localhost:5000/customers/"+ this.props.match.params.id,this.state).then(result => {
            console.log(result);
            this.props.history.push('/');
        })
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

export default EditUser
