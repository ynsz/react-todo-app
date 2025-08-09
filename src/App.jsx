// import Sushi from "./sushi";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function HandleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={HandleClick}>Count UP</button>
    </div>
  );

  //   const sushis = [
  //     {
  //       name: "サーモン",
  //       price: 150,
  //     },
  //     {
  //       name: "まぐろ",
  //       price: 400,
  //     },
  //     {
  //       name: "たまご",
  //       price: 100,
  //     },
  //   ];

  //   return (
  //     <div>
  //       {sushis.map((sushi, index) => {
  //         return <Sushi name={sushi.name} price={sushi.price} key={index} />;
  //       })}
  //     </div>
  //   );
}

export default App;
