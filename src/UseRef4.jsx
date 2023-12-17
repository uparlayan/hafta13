import { useEffect, useRef, useState } from "react";

function UseRef4() {
  const [sayi, sayiGuncelle] = useState(0);
  const alarm = useRef(null);

  useEffect(() => {
    alarm.current = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    return () => clearInterval(alarm.current);
  }, []);

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
        <div>Timer örneği.</div>
        <p>{sayi}</p>
        <button
          onClick={() => {
            sayiGuncelle((eski) => eski + 1);
          }}
        >
          Arttır
        </button>
      </section>
    </>
  );
}

export default UseRef4;
