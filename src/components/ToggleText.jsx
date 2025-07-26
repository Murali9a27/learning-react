import React, { useState } from 'react';



function ToggleText() {
    const [isVisible, setIsVisible]= useState(true);

  return (
    <>
        <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button>
        {isVisible && <div>ToggleText</div>}
        
    </>
    
  )
}

export default ToggleText