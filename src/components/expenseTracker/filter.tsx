interface Props {
  categories: string[];
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter = ({ categories, onSelect }: Props) => {
  return (
    <select
      onChange={onSelect}
      className="form-select"
      defaultValue="All Categories"
      aria-label="Default select example"
    >
      <option>All Categories</option>
      {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default Filter;
