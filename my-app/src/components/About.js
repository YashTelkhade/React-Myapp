import React from 'react'


const heading={
    color:"chartreuse"
  }
  

function About(props) {
    return (
        <div style={heading}>
            <h2>About Page</h2>
            <button onClick={()=> props.history.push("/shop?id=11", {userId:12})}>Navigate somewhere</button>
        </div>
    )
}

export default About
