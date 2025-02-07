import { Grid2, Paper } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

export default function CheckoutPage() {
  return (
    <Paper>
      <Grid2 container spacing={3}>
        <Grid2
          size={4}
          sx={{ p: 3, borderRight: "1px solid", borderColor: "divider" }}
        >
          <Info />
        </Grid2>
        <Grid2 size={8} sx={{ p: 3 }}>
          <AddressForm />
          <PaymentForm />
          <Review />
        </Grid2>
      </Grid2>
    </Paper>
  );
}
