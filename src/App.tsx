import List from "./components/expnenseList/list";

function App() {
  const items = [
    { "description": "Electricity", "amount": 100, "category": "Utilities" },
    { "description": "Carrots", "amount": 10, "category": "Groceries" }
  ]

  return (
    <>
      <List items={items} />
    </>
  );
}

export default App;
