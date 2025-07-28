import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm';

function Counter() {
    const [count, setCount]= useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>{count}</p>
      <FeedbackForm/>
    </>
    
  )
}

export default Counter