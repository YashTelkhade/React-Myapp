import React from 'react'

function Namelist() {

    const arr=["Yash","Shubham","Pravin"]
    const arrlist= arr.map((name1,index)=>
        <h2>key={index}, {name1}</h2>)

    return (
        <div>
            {arrlist}          
        </div>
    )
}

export default Namelist
