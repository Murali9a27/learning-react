import React, { useRef } from 'react';

function UserefEx2() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Direct access to the input DOM node
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UserefEx2;
