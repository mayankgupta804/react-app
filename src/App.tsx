import { useState } from "react";
import { produce } from "immer";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Bob",
    },
  });

  // Solution 1: Using vanilla React
  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Joe" } });
  // };

  // Solution 2: Using immer
  const handleClick = () => {
    setGame(
      produce((draft) => {
        draft.player.name = "Joe";
      })
    );
  };

  return (
    <>
      <button onClick={handleClick}>Click me!!</button>
      <p>{game.player.name}</p>
    </>
  );
}

export default App;
