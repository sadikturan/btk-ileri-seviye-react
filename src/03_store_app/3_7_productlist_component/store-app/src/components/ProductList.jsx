import { Grid2 } from "@mui/material";

export default function ProductList({ products }) {
  return (
    <Grid2 container spacing={2}>
      {products.map((p) => (
        <Grid2
          sx={{ backgroundColor: "primary.light" }}
          key={p.id}
          size={{ xs: 6, md: 4, lg: 3 }}
        >
          {p.title}
        </Grid2>
      ))}
    </Grid2>
  );
}
