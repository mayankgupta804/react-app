import Button from "./components/Button";

function App() {

  return (
    <Button onClick={() => console.log("Hello World")} color="danger">My Button</Button>
  );
}

export default App;
