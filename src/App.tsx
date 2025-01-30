import { useState } from "react";
import ExpenseFilter from "./components/expenseTracker/Filter";
import ExpenseList from "./components/expenseTracker/List";
import ExpenseForm from "./components/expenseTracker/Form";
import { FieldValues } from "react-hook-form";

function App() {
  const originalItems = [
    { "description": "Electricity", "amount": 100, "category": "Utilities" },
    { "description": "Carrots", "amount": 10, "category": "Groceries" }
  ];

  const [items, setItems] = useState([...originalItems])

  interface Item {
    description: string;
    amount: number;
    category: string;
  }

  const handleSelect = (category: string) => {
    if (category === "All Categories") {
      setItems(originalItems);
      return;
    }
    setItems(originalItems.filter(item => item.category === category));
  }

  const handleDelete = (description: string) => {
    setItems(items.filter(item => item.description !== description))
  }

  const handleOnSubmit = (data: FieldValues) => {
    const newItems = [...items, data as Item];
    setItems(newItems);
  }

  return (
    <>
      <ExpenseForm onSubmit={handleOnSubmit} categories={items.map(item => item.category)} />
      <br />
      <ExpenseFilter onSelect={handleSelect} categories={items.map(item => item.category)} />
      <br />
      <ExpenseList onDelete={handleDelete} items={items} />
    </>
  );
}

export default App;
