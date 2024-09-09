import { useEffect } from "react";

const connect = () => console.log("Connecting to the server");
const disconnect = () => console.log("Disconnecting...");

function App() {
  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <></>;
}

export default App;
