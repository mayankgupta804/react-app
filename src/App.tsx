import Button from "./components/Button";
import { useState } from "react";

function App() {
  // 3. The state that an app holds stores is stored in an array [false, true]
  // and in the order that it is declared. That's why the state hook should be
  // declared on the top, and should not be used with conditionals.
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    // 2. Since state is stored outside of the components, any updates to the local var will be lost
    // upon re-rendering
    count++;
    // 1. React updates the state asynchronously. It will batch all the updates,
    // and apply them after the function execution is finished.
    console.log(isVisible); // it will print "false" because the update does not happen immediately
    console.log(count);
  };

  return <Button onClick={handleClick}>My Button</Button>;
}

export default App;
