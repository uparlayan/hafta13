import React, { useReducer } from "react";
import { ilkDurum, reducer } from "./reducers/sayacReducer";

function App() {
  const [durum, vekilFonksiyon] = useReducer(reducer, ilkDurum);

  console.log(durum.sayi);

  return (
    <>
      Count: {durum.sayi}
      <button onClick={() => vekilFonksiyon({ type: "increment" })}>+</button>
      <button onClick={() => vekilFonksiyon({ type: "decrement" })}>-</button>
      <button onClick={() => vekilFonksiyon({ type: "reset" })}>Reset</button>
    </>
  );
}

export default App;
