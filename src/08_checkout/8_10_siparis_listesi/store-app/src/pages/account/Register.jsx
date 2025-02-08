import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./accountSlice";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.account);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function handleForm(data) {
    dispatch(registerUser(data));
  }

  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding: 2 }} elevation={3}>
        <Avatar sx={{ mx: "auto", mb: 2, color: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: "center", mb: 2 }}
        >
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleForm)}
          noValidate
          sx={{ mb: 2 }}
        >
          <TextField
            {...register("username", {
              required: "username zorunlu alan",
              minLength: {
                value: 3,
                message: "username min. 3 karakter olmalıdır.",
              },
            })}
            label="Enter username"
            size="small"
            fullWidth
            autoFocus
            sx={{ mb: 2 }}
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <TextField
            {...register("email", {
              required: "email zorunlu alan",
              minLength: {
                value: 3,
                message: "email min. 3 karakter olmalıdır.",
              },
            })}
            label="Enter email"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("password", {
              required: "password zorunlu alan",
              minLength: {
                value: 6,
                message: "password min. 6 karakter olmalıdır.",
              },
            })}
            type="password"
            label="Enter password"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            disabled={!isValid}
            color="secondary"
          >
            {status === "pending" ? <CircularProgress size="25px" /> : "Submit"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
