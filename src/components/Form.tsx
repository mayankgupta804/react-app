import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const FormSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should contain at least 3 characters" }),
  amount: z
    .number({
      invalid_type_error: "Amount must be a number",
      required_error: "Amount is required",
    })
    .positive(),
  category: z.string().min(3, { message: "Category is required." }),
});

type FormData = z.infer<typeof FormSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(FormSchema) });

  const [items, setItems] = useState<FormData[]>([]);
  const [tableItems, setTableItems] = useState<FormData[]>([]);

  const onSubmit = (data: FormData) => {
    const newItems = [...items, { ...data }];
    setItems(newItems);
    setTableItems(newItems);
    console.log(newItems);
    reset();
  };

  const onDelete = (data: FormData) => {
    const leftOverItems = items.filter(
      (item) => item.description != data.description
    );
    setItems(leftOverItems);
    setTableItems(leftOverItems);
  };

  const onSelectHandler = (event: React.ChangeEvent) => {
    const category = (event.target as HTMLInputElement).value;

    if (category === "all") {
      setTableItems(items);
    } else {
      const selectedItems = items.filter((item) => item.category === category);
      setTableItems(selectedItems);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select {...register("category")} className="form-control">
            <option value=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <br />

      <select className="form-control" onChange={onSelectHandler}>
        <option defaultValue="all">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <br />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item) => (
            <tr key={item.description}>
              <th scope="row">{item.description}</th>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
