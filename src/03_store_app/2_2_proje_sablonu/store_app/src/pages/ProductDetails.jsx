import { Divider, Grid2, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

    fetchProductDetails(id);
  }, [id]);

  if (loading) return <Loading />;

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ lg: 4, md: 5, sm: 6, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <img
            src={`http://localhost:5000/images/${product?.image}`}
            style={{ width: "100%" }}
          />
        </Paper>
      </Grid2>
      <Grid2 size={{ lg: 8, md: 7 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography component="h1" variant="h4" color="secondary.dark">
            {product?.title}
          </Typography>
          <Typography variant="body1">{product?.description}</Typography>
        </Paper>
      </Grid2>
    </Grid2>
  );
}
