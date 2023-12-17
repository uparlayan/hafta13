const Sepet = ({ sepet, sepetVekil }) => {
  return (
    <>
      {sepet.map((item) => (
        <div key={item.id}>
          ID: {item.id} - Adet: {item.quantity}
          <button
            onClick={() => sepetVekil({ type: "increment", id: item.id })}
          >
            +
          </button>
          <button
            onClick={() => sepetVekil({ type: "decrement", id: item.id })}
          >
            -
          </button>
          <button onClick={() => sepetVekil({ type: "remove", id: item.id })}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default Sepet;
