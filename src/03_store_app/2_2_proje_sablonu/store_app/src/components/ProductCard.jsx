import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { currenyTRY } from "../utils/formats";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <Card key={product.id}>
      <CardActionArea component={Link} to={"/products/" + product.id}>
        <CardMedia
          sx={{ height: 160, backgroundSize: "contain" }}
          image={`http://localhost:5000/images/${product.image}`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            color="primary.dark"
          >
            {product.title}
          </Typography>
          <Typography variant="body1" color="secondary.dark">
            {currenyTRY.format(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton>
          <FavoriteBorderIcon />
          {/* <FavoriteIcon /> */}
        </IconButton>
        <Button>Sepete Ekle</Button>
      </CardActions>
    </Card>
  );
}
