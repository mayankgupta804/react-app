import { useState } from "react";
import ProductList from "./expense-tracker/components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="clothing">Clothing</option>
        <option value="household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
