import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { currenyTRY } from "../../utils/formats";

export default function Info() {
  const { cart } = useSelector((state) => state.cart);

  const subTotal = cart?.cartItems.reduce(
    (toplam, item) => toplam + item.product.price * item.product.quantity,
    0
  );

  const tax = subTotal * 0.2;
  const total = subTotal + tax;

  return (
    <>
      <Typography variant="subtitle2" color={{ color: "text.secondary" }}>
        Toplam
      </Typography>
      <Typography variant="h5" gutterBottom>
        {currenyTRY.format(total)}
      </Typography>
      <List>
        {cart?.cartItems.map((item) => (
          <ListItem key={item.product.productId} sx={{ py: 1, px: 0 }}>
            <ListItemAvatar>
              <Avatar
                variant="square"
                src={`http://localhost:5000/images/${item.product.image}`}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.product.title}
              secondary={`x${item.product.quantity}`}
            ></ListItemText>
            <Typography variant="body1">
              {currenyTRY.format(item.product.price)}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}
