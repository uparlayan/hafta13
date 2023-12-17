import { useEffect, useRef, useState } from "react";

function UseRef5() {
  const [sayi, sayiGuncelle] = useState(0);
  const sayiRef = useRef(100);

  return (
    <>
      <section
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
          margin: "2rem 2rem 0 2rem",
        }}
      >
        <div>UseRef değeri {sayiRef.current}</div>
        <p>{sayi}</p>
        <button
          onClick={() => {
            sayiGuncelle((eski) => eski + 1);
          }}
        >
          Arttır
        </button>

        <button onClick={() => (sayiRef.current += 100)}>
          sayiRef değerini arttır
        </button>
      </section>
    </>
  );
}

export default UseRef5;
