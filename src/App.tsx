import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/Filter";
import ExpenseList from "./expense-tracker/components/List";
import ExpenseForm from "./expense-tracker/components/Form";
import { FieldValues } from "react-hook-form";
import Item from "./types/Item";
import { categories } from "./constants";

function App() {
  const [expenses, setExpenses] = useState([
    { "description": "Electricity", "amount": 100.21, "category": "Utilities" },
    { "description": "Carrots", "amount": 10.45, "category": "Groceries" },
    { "description": "Movie", "amount": 26.99, "category": "Entertainment" }
  ]);

  const [selectedCategory, setCategory] = useState("")

  const handleSelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
  }

  const handleDelete = (description: string) => {
    const remainingItems = expenses.filter(item => item.description !== description);
    setExpenses(remainingItems);
  }

  const handleOnSubmit = (data: FieldValues) => {
    const newItems = [...expenses, data as Item];
    setExpenses(newItems);
  }

  const visibleExpenses = selectedCategory ?
    expenses.filter(expense => expense.category === selectedCategory) : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm onSubmit={handleOnSubmit} categories={categories} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={handleSelect} categories={categories} />
      </div>
      <div className="mb-3">
        <ExpenseList onDelete={handleDelete} items={visibleExpenses} />
      </div>
    </>
  );
}

export default App;
