import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Ranchi", "Bangalore", "Delhi"];
  // const cities: string[] = [];
  return (
    <ListGroup
      heading="Cities"
      onSelectItem={(name) => console.log("Hello " + name)}
      items={cities}
    />
  );
}

export default App;
