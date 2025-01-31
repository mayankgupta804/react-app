import Button from "../../components/Button";
import Item from "../../types/Item";
import { nanoid } from 'nanoid';


interface Props {
  items: Item[];
  onDelete: (description: string) => void;
}

const ExpenseList = ({ items, onDelete }: Props) => {
  if (items.length === 0)
    return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={nanoid()}>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>{item.category}</td>
              <td>
                <Button color="danger" onClick={() => onDelete(item.description)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${items.reduce((acc, item) => acc + item.amount, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  )
}

export default ExpenseList;
