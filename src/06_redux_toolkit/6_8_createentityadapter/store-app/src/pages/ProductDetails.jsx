import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import requests from "../api/apiClient";
import { useCartContext } from "../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setCart } from "./cart/cartSlice";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { cart, status } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartItem = cart?.cartItems.find(
    (i) => i.product.productId == product?.id
  );

  function handleAddItem(productId) {
    dispatch(addItemToCart({ productId: productId }));
  }

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await requests.products.details(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [id]);

  if (loading) return <Loading message="Yükleniyor..." />;

  if (!product) return <h1>Ürün bulunamadı.</h1>;

  return (
    <ProductItem
      product={product}
      handleAddItem={handleAddItem}
      cartItem={cartItem}
      isAdding={status === "pendingAddItem" + product.id}
    />
  );
}
