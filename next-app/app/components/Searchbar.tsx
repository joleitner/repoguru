"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SourceIcon from "@mui/icons-material/Source";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";

interface SearchbarProps {
  searchType: "repository" | "user";
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  searchType,
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  return (
    <Paper sx={{ m: "5px" }}>
      <Box
        component="form"
        sx={{ display: "flex" }}
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          handleSearch(); // Call actual search handler
        }}
      >
        <TextField
          fullWidth
          placeholder={`Find a ${searchType}...`}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          data-testid="searchbar-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {searchType === "user" ? <AccountCircleIcon /> : <SourceIcon />}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};

export default Searchbar;
