import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {

  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in: ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  useEffect(() => {
    console.log(products)
  });

  return (
    <div>
      Product List
    </div>
  )
};

export default ProductList;
