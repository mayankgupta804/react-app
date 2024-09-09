import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["clothing", "household"]);
  }, [category]);

  const [products, setProducts] = useState<string[]>([]);
  return <div>Products List</div>;
};

export default ProductList;
