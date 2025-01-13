import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Loading({ message = "Loading..." }) {
  return (
    <Backdrop open={true} invisible={true}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="inherit" />
        <Typography
          variant="h4"
          sx={{ justifyContent: "center", position: "fixed", top: "60%" }}
          color="inherit"
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
