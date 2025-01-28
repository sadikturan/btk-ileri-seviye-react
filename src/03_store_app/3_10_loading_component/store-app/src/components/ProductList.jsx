import { Grid2 } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <Grid2 container spacing={2}>
      {products.map((p) => (
        <Grid2 key={p.id} size={{ xs: 6, md: 4, lg: 3 }}>
          <ProductCard product={p} />
        </Grid2>
      ))}
    </Grid2>
  );
}
