import React from 'react'
 import propTypes from 'prop-types'

function Task4(props) {
    // console.log(props)                                       //1st way
    // if(typeof props.name !=='string')
    //     console.log("Please enter string");
    
    // else if(typeof props.age!=='number'){
    //     console.log("Please enter number");
    // }
    // else if(typeof props.user!=='object'){
    //     console.log("Please enter object");
    // }

  return (
    <div>
        <h2>props validation</h2>
        {props.name}
        {props.age}
        {props.user.hobby}
    </div>
  )
}

Task4.propTypes={                                        // 2nd way
    name:propTypes.string,
    age:propTypes.number,
    user:propTypes.object
}


export default Task4
