import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Loading from "../components/Loading";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </div>
  );
}
