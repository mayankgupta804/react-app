import Filter from "./components/expenseTracker/filter";
import List from "./components/expenseTracker/list";

function App() {
  const items = [
    { "description": "Electricity", "amount": 100, "category": "Utilities" },
    { "description": "Carrots", "amount": 10, "category": "Groceries" }
  ]

  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  return (
    <>
      <Filter onSelect={handleOnSelect} categories={items.map(item => item.category)} />
      <List items={items} />
    </>
  );
}

export default App;
