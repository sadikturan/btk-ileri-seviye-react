import {
  Button,
  CircularProgress,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { currenyTRY } from "../utils/formats";
import ReportIcon from "@mui/icons-material/Report";
export default function ProductItem({
  product,
  handleAddItem,
  cartItem,
  isAdding,
}) {
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
          <Typography variant="h5" color="secondary" sx={{ mt: 3 }}>
            {currenyTRY.format(product.price)}
          </Typography>

          <Stack
            direction="row"
            display="flex"
            alignItems="center"
            gap={2}
            sx={{ mt: 3 }}
          >
            <Button
              onClick={() => handleAddItem(product.id)}
              variant="contained"
              color="secondary"
            >
              Sepete Ekle
            </Button>

            {cartItem?.product.quantity > 0 && (
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ReportIcon color="secondary" /> Sepetinizde{" "}
                {cartItem.product.quantity} adet eklendi.
              </Typography>
            )}

            {isAdding && <CircularProgress size="20px" />}
          </Stack>
        </Paper>
      </Grid2>
    </Grid2>
  );
}
