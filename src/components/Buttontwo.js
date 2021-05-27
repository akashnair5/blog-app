import React from 'react'
import { useState } from 'react'

const Buttontwo = ({color, text}) => {
    const [count, setCount] = useState(0);
    return (
        <div>
         <button onClick = {() => setCount(count + 1)}
        style={{ backgroundColor: color }}
        className='btn'>
        {text}
        {count}
        </button>
            
        </div>
    )
}

Buttontwo.defaultProps = {
    color: 'steelblue',
  }
  

export default Buttontwo
