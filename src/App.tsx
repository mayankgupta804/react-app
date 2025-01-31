import { useState } from "react";
import ExpenseFilter from "./components/expenseTracker/Filter";
import ExpenseList from "./components/expenseTracker/List";
import ExpenseForm from "./components/expenseTracker/Form";
import { FieldValues } from "react-hook-form";
import Item from "./types/Item";

function App() {
  const originalItems = [
    { "description": "Electricity", "amount": 100, "category": "Utilities" },
    { "description": "Carrots", "amount": 10, "category": "Groceries" },
    { "description": "Movie", "amount": 26, "category": "Entertainment" }
  ];

  const categories = originalItems.map(item => item.category);

  const [items, setItems] = useState([...originalItems]);
  const [filteredItems, setFilteredItems] = useState([...originalItems])

  const handleSelect = (category: string) => {
    if (category === "All Categories") {
      setFilteredItems(items);
      return;
    }
    setFilteredItems(items.filter(item => item.category === category));
  }

  const handleDelete = (description: string) => {
    const remainingItems = items.filter(item => item.description !== description);
    setItems(remainingItems);
    setFilteredItems(remainingItems);
  }

  const handleOnSubmit = (data: FieldValues) => {
    const newItems = [...items, data as Item];
    setItems(newItems);
    setFilteredItems(newItems);
  }

  return (
    <>
      <ExpenseForm onSubmit={handleOnSubmit} categories={categories} />
      <br />
      <ExpenseFilter onSelect={handleSelect} categories={categories} />
      <br />
      <ExpenseList onDelete={handleDelete} items={filteredItems} />
    </>
  );
}

export default App;
