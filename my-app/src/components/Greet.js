import React from 'react'
import styles from './About.css'

// function Greet() {
//     return (
//         <div>
//             Hello, everyone, This is the testing file.
//         </div>
//     )
// }

const Greet=(props)=> <h2 className={`primary ${styles.fontxl}`}>Hello, everyone, This is the testing file that is developed by {props.name}.</h2>;
      
export default Greet
 