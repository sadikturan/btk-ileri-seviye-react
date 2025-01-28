import { Grid2, Paper, Typography } from "@mui/material";

export default function ProductItem({ product }) {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ lg: 4, md: 5, sm: 6, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <img
            src={`http://localhost:5000/images/${product.image}`}
            style={{ width: "100%" }}
          />
        </Paper>
      </Grid2>
      <Grid2 size={{ lg: 8, md: 7, sm: 6, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography component="h1" variant="h4" color="secondary.dark">
            {product.title}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </Paper>
      </Grid2>
    </Grid2>
  );
}
