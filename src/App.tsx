import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });

  // Solution 1: Using the vanilla React way
  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };

  // Solution 2
  // const handleClick = () => {
  //   setPizza(
  //     produce((draft) => {
  //       draft.toppings.push("Cheese");
  //     })
  //   );
  // };

  // Solution 3
  const handleClick = () => {
    const updatedItems = cart.items.map((item) => {
      if (item.id === 1) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCart({
      ...cart,
      items: [...updatedItems],
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          console.log(cart);
          handleClick();
        }}
      >
        Click me!
      </Button>
    </>
  );
}

export default App;
