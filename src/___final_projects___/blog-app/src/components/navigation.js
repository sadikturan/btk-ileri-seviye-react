"use client";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <AppBar position="static" sx={{ backgroundColor: blue[500] }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="vercel.svg" height={20} width={20} alt="" />
          <Button
            component={Link}
            href="/"
            color={pathname === "/" ? "secondary" : "inherit"}
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/blogs"
            color={pathname === "/blogs" ? "secondary" : "inherit"}
          >
            Blogs
          </Button>
          <Button
            component={Link}
            href="/users"
            color={pathname === "/users" ? "secondary" : "inherit"}
          >
            Users
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
