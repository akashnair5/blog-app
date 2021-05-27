import React from 'react'
import { useState } from 'react'

const Buttonone = ({ color, text}) => {
    const [counts, setCounts] = useState(0);
  return (
    <div className = 'buttonone'>
        <button onClick = {() => setCounts(counts + 1)}
        style={{ backgroundColor: color }}
        className='btn'>
        {text}
        {counts}
        </button>
    </div>
  )
}


export default Buttonone