import {
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { currenyTRY } from "../utils/formats";
import { Delete } from "@mui/icons-material";
import { useCartContext } from "../context/CartContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";
import requests from "../api/apiClient";

export default function CartPage() {
  const { cart, setCart } = useCartContext();
  const [loading, setLoading] = useState(false);

  if (!cart || cart.cartItems.length === 0)
    return <Typography component="h4">Sepetinizde ürün yok</Typography>;

  function handleAddItem(productId) {
    setLoading(true);
    requests.cart
      .addItem(productId)
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  function handleRemoveItem(productId, quantity = 1) {
    setLoading(true);
    requests.cart
      .deleteItem(productId, quantity)
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 100 }}></TableCell>
            <TableCell>Ürün</TableCell>
            <TableCell sx={{ width: 120 }}>Fiyat</TableCell>
            <TableCell sx={{ width: 170 }}>Adet</TableCell>
            <TableCell sx={{ width: 120 }}>Toplam</TableCell>
            <TableCell sx={{ width: 50 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img
                  src={`http://localhost:5000/images/${item.product.image}`}
                  style={{ width: "100%" }}
                />
              </TableCell>
              <TableCell>{item.product.title}</TableCell>
              <TableCell>{currenyTRY.format(item.product.price)}</TableCell>
              <TableCell>
                <Button onClick={() => handleAddItem(item.product.productId)}>
                  {loading ? (
                    <CircularProgress size="20px" />
                  ) : (
                    <AddCircleOutlineIcon />
                  )}
                </Button>

                {item.product.quantity}
                <Button
                  onClick={() => handleRemoveItem(item.product.productId)}
                >
                  {loading ? (
                    <CircularProgress size="20px" />
                  ) : (
                    <RemoveCircleOutlineIcon />
                  )}
                </Button>
              </TableCell>
              <TableCell>
                {currenyTRY.format(item.product.price * item.product.quantity)}
              </TableCell>
              <TableCell>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
