import React, { useRef } from 'react';

function UserefEx3() {
  const sectionRef = useRef(null);

  const scrollToDiv = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log(sectionRef.current)
  };

  return (
    <div>
      <button onClick={scrollToDiv}>Go to Section</button>
      <div style={{ height: '500px' }}></div>
      <div ref={sectionRef} style={{ background: '#eee', padding: '20px' }}>
        📌 You’ve reached the section!
      </div>
    </div>
  );
}

export default UserefEx3;
