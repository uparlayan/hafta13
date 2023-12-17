import React, { useRef } from "react";

function UseRef2() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
    inputRef.current.type = "password";
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus on Input</button>
    </div>
  );
}

export default UseRef2;
