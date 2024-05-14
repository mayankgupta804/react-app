import Button from "./components/Button";
import { useState } from "react";
import { produce } from "immer";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Toppings",
    toppings: ["Mushroom"],
  });

  // Solution 1: Using the vanilla React way
  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };

  // Solution 2
  const handleClick = () => {
    setPizza(
      produce((draft) => {
        draft.toppings.push("Cheese");
      })
    );
  };

  return (
    <>
      <Button onClick={handleClick}>Click me!</Button>
      <p>{pizza.toppings.map((top) => top + ",")}</p>
    </>
  );
}

export default App;
