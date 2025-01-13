import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Badge } from "@mui/material";
import { Link, NavLink } from "react-router";
import { ShoppingCart } from "@mui/icons-material";

const links = [
  { title: "Home", to: "/" },
  { title: "Products", to: "/products" },
];

const authLinks = [
  { title: "Login", to: "/login" },
  { title: "Register", to: "/register" },
];

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "secondary.light" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <IconButton color="inherit">
              <StorefrontIcon />
            </IconButton>
            {links.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                color="inherit"
              >
                {link.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component={Link}
              to="/cart"
              size="large"
              edge="start"
              color="inherit"
            >
              <Badge badgeContent="2" color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            {authLinks.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                color="inherit"
              >
                {link.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
