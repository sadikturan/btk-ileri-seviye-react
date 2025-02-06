import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import requests from "../api/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "./catalog/catalogSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const loadedProducts = useSelector(selectAllProducts);
  const { status, isLoaded } = useSelector((state) => state.catalog);

  useEffect(() => {
    if (!isLoaded) dispatch(fetchProducts());
  }, [isLoaded]);

  if (status === "pendingFetchProducts")
    return <Loading message="Yükleniyor..." />;

  return <ProductList products={loadedProducts} />;
}
