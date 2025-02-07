import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("firstname", {
            required: "firstname zorunlu alan",
          })}
          label="Enter firstname"
          size="small"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          error={!!errors.firstname}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("lastname", {
            required: "lastname zorunlu alan",
          })}
          label="Enter lastname"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.lastname}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("phone", {
            required: "phone zorunlu alan",
          })}
          label="Enter phone"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.phone}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("city", {
            required: "city zorunlu alan",
          })}
          label="Enter city"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.city}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextField
          {...register("addressline", {
            required: "addressline zorunlu alan",
          })}
          label="Enter addressline"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.addressline}
        />
      </Grid2>
    </Grid2>
  );
}
