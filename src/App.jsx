import React, { useReducer, useRef } from "react";
import { sepetReducer } from "./reducers/sepetReducer";
import Sepet from "./Sepet";

function App() {
  const [sepet, sepetVekil] = useReducer(sepetReducer, []);
  const idRef = useRef(0);

  return (
    <div>
      <h2>Alışveriş Sepeti</h2>
      <Sepet sepet={sepet} sepetVekil={sepetVekil} />

      <button
        onClick={() => {
          idRef.current++;
          sepetVekil({ type: "add", id: "Yeni Ürün" + idRef.current });
        }}
      >
        Ürün Ekle
      </button>
    </div>
  );
}

export default App;
