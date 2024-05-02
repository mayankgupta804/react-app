import ListGroup from "./components/ListGroup";
import "./App.css";
function App() {
  const items = ["Ranchi", "Kathmandu", "Bangkok"];

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />
    </>
  );
}

export default App;
