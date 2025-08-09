function Sushi({ name, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price + "円"}</p>
    </div>
  );
}

export default Sushi;
