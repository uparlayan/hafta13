import React, { useRef } from "react";

function UseRef3() {
  const divRef = useRef(null);

  const handleButtonClick = () => {
    divRef.current.style.color = "red";
    divRef.current.style.fontSize = "24px";
  };

  return (
    <div ref={divRef}>
      <p>This is a div with dynamic style.</p>
      <button onClick={handleButtonClick}>Update Style</button>
    </div>
  );
}

export default UseRef3;
