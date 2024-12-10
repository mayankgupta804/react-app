import Button from "./components/Button";

function App() {
  return (
    <Button color="danger" onClick={() => console.log("I was clicked")}>
      My Button
    </Button>
  );
}

export default App;
