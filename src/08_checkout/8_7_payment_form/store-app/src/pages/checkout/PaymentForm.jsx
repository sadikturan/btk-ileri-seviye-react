import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("cardname", {
            required: "cardname zorunlu alan",
          })}
          label="Enter cardname"
          size="small"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          error={!!errors.cardname}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("cardnumber", {
            required: "cardnumber zorunlu alan",
          })}
          label="Enter cardnumber"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.cardnumber}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("expirydate", {
            required: "expirydate zorunlu alan",
          })}
          label="Enter expirydate"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.expirydate}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("cvv", {
            required: "cvv zorunlu alan",
          })}
          label="Enter cvv"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.cvv}
        />
      </Grid2>
    </Grid2>
  );
}
