import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  colors,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  // const [username, setUsername] = useState("sadikturan");
  // const [password, setPassword] = useState("12345");

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
          <TextField
            value={values.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInputChange}
            name="username"
            label="Enter username"
            size="small"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            value={values.password}
            onChange={handleInputChange}
            name="password"
            type="password"
            label="Enter password"
            size="small"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            color="secondary"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
