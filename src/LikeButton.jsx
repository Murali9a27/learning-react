import React, { useState } from 'react'

function LikeButton() {
    const [like, setLike] = useState(0)
  return (
    <>
        <button style={{outline:"none", border: "none"}} onClick={()=> setLike( like + 1)}>❤️</button>
        <p>{like}</p>
    </>
    
  )
}

export default LikeButton