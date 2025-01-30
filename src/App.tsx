import { useState } from "react";
import ExpenseFilter from "./components/expenseTracker/filter";
import ExpenseList from "./components/expenseTracker/list";

function App() {
  const originalItems = [
    { "description": "Electricity", "amount": 100, "category": "Utilities" },
    { "description": "Carrots", "amount": 10, "category": "Groceries" }
  ];

  const [items, setItems] = useState([...originalItems])

  const handleOnSelect = (category: string) => {
    if (category === "All Categories") {
      setItems(originalItems);
      return;
    }
    setItems(originalItems.filter(item => item.category === category));
  }

  return (
    <>
      <ExpenseFilter onSelect={handleOnSelect} categories={originalItems.map(item => item.category)} />
      <ExpenseList items={items} />
    </>
  );
}

export default App;
