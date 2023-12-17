import React, { useEffect, useReducer, useState } from "react";
import { temaIlkState, temaReducerFonksiyonu } from "./reducers/temaReducer";

function App() {
  const [temaDurum, temaVekilFonksiyonu] = useReducer(temaReducerFonksiyonu, temaIlkState);

  const [sure, sureGuncelle] = useState(true);

  const reducerGuncelle = (aksiyon) => {
    if (sure) {
      temaVekilFonksiyonu(aksiyon);
      sureGuncelle(false);

      setTimeout( () => {
        sureGuncelle(true)
      }, 5000);
    }
  };

  return (
    <div style={{ color: temaDurum.color, fontSize: temaDurum.fontSize }}>
      <p>This is a themed text!</p>
      <button
        onClick={() => reducerGuncelle({ type: "renkDegistir", color: "red" })}
      >
        Red Theme
      </button>
      <button
        onClick={() => reducerGuncelle({ type: "renkDegistir", color: "blue" })}
      >
        Blue Theme
      </button>
      <button onClick={() => reducerGuncelle({ type: "fontuArttir" })}>
        Increase Font Size
      </button>
      <button onClick={() => reducerGuncelle({ type: "fontuAzalt" })}>
        Decrease Font Size
      </button>
    </div>
  );
}
export default App;
