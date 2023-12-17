import React, { useRef, useState } from "react";

function UseRef1() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}

export default UseRef1;
