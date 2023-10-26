"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

interface SearchbarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  return (
    <Paper>
      <Box component="form" sx={{ display: "flex" }}>
        <TextField
          fullWidth
          placeholder="Search for a repository..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton> */}
      </Box>
    </Paper>
  );
};

export default Searchbar;
