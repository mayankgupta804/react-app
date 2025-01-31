interface Props {
  categories: string[];
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelect }: Props) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="form-select"
      aria-label="Default select example"
    >
      <option value="">All Categories</option>
      {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter;
