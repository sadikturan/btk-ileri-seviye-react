import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5000/products/");
        const data = await response.json();
        setLoadedProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return <ProductList products={loadedProducts} />;
}
