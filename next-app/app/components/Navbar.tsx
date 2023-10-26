"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const pages = ["Search", "About us"];

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar>
        <Typography variant="h6" color="text.primary">
          RepoGuru
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
