import { useState } from "react";
import UseRef5 from "./UseRef5";

function App() {
  const [acKapa, acKapaGuncelle] = useState(true);

  return (
    <>
      <p>Merhaba</p>
      <button onClick={() => acKapaGuncelle((eskiDeger) => !eskiDeger)}>
        UseRef4 komponentini aç/kapa
      </button>
      {acKapa && <UseRef5 />}
    </>
  );
}

export default App;
