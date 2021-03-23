import React, { Component } from 'react'
import axios from 'axios'

const header = {
    color : "red"
}
const header2 = {
    padding : "25px",
    color:"orange"
}



class Customerlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             customers:[]
        }
    }

    componentDidMount() {
        console.log(this.props.history);
        
        axios.get("http://localhost:5000/customers")
        .then((response) => {
            console.log(response);
            this.setState({
                customers: response.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteHandler = id =>{
        axios.delete("http://localhost:5000/customers/" + id)
        .then((result) => { 
            this.setState({
                customers: this.state.customers.filter((customer) => {
                    if(!customer._id.toLowerCase().includes(id.toLowerCase())){
                        return customer;
                    }
                })
            })     
        })
    }

    editHandler = (id) => {
        this.props.history.push('/edit/' +id);
    }

    renderTableData(){
        return this.state.customers.map((customer,index)=>{
            //Array Destructuring
            const {_id, first_name, last_name, gender } = customer
            return(
                <tr key={_id} style = {header2}>
                    <td style = {header2}>{first_name}</td>
                    <td style = {header2}>{last_name}</td>
                    <td style = {header2}>{gender}</td>
                    <td><button onClick={()=> this.editHandler(_id)}>Edit</button></td>
                    <td><button onClick={()=> this.deleteHandler(_id)}>Delete</button></td>
                    
                </tr>
            )
        })
    }


    render() {
        return (
            <div>
                <table style={header}>
                    <tbody id = "students">
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Customerlist 
