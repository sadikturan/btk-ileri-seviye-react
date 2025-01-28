import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch("http://localhost:5000/products/" + id);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return <ProductItem product={product} />;
}
