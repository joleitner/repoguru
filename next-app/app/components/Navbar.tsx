"use client";

import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const pages = ["Search", "About us"];

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar>
        <Link href="/" passHref>
          <Typography component="a" variant="h6" color="text.primary">
            RepoGuru
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
