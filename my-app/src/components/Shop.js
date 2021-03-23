import React from 'react'



const heading={
    color:"cyan"
}
  
function Shop(props) {
    return (
        <div style={heading}>
            Shop Page
            {JSON.stringify(props.history.location.state.userId)}
        </div>
    )
}

export default Shop
