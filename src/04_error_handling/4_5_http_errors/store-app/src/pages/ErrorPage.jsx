import { Box, Button } from "@mui/material";
import requests from "../api/apiClient";

export default function ErrorPage() {
  return (
    <Box>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get400Error()}
      >
        Bad Request
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get401Error()}
      >
        UnAuthorized
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get403Error()}
      >
        Validation Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get404Error()}
      >
        Not Found
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get500Error()}
      >
        Server Error
      </Button>
    </Box>
  );
}
