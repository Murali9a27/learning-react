import React, { useRef } from 'react';

function UserefEx1() {
  const click = useRef(0);

  const handleClick = () => {
    click.current += 1; // ✅ correct way to increment ref value
    console.log("Clicked:", click.current);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>Check console — no re-render, but value updates</p>
    </>
  );
}

export default UserefEx1;
