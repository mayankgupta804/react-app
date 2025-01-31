import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { categories } from "../../constants";

const schema = z.object({
  description: z.string().min(3, "Description must contain at least 3 characters").max(50),
  amount: z.
    number({ invalid_type_error: "Amount is required" }).
    min(0.01, { message: "Amount cannot be 0" }).
    max(100_000),
  category: z.enum(categories)
});

interface Props {
  onSubmit: (data: FieldValues) => void;
  categories: string[];
}

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit, categories }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="form-label">Description</label>
        <input
          {...register("description")}
          id="form-label"
          type="text"
          className="form-control"
        />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          aria-label="Default select example"
        >
          <option></option>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
