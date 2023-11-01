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
import Autocomplete from "@mui/material/Autocomplete";

interface SearchbarProps {
  searchType: "repository" | "user";
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  languageOptions?: string[];
  setLanguage?: React.Dispatch<React.SetStateAction<string | null>>;
}

/**
 * Searchbar for searching users or repositories
 * when searchType is "repository", languageOptions and setLanguage are required to show a language filter
 *
 * @param {SearchbarProps} props
 * @returns {JSX.Element} Searchbar component
 */
const Searchbar: React.FC<SearchbarProps> = ({
  searchType,
  searchTerm,
  setSearchTerm,
  handleSearch,
  languageOptions,
  setLanguage,
}) => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        gap: "20px",
        m: "5px",
        width: "100%",
        flexDirection: "column", // on small screen display searchbar on top of language filter
        "@media (min-width: 600px)": {
          flexDirection: "row", // Change back to row for larger screens
        },
      }}
      onSubmit={(e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        handleSearch(); // Call actual search handler
      }}
    >
      <Paper sx={{ flexGrow: 1 }}>
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
                <IconButton type="submit" data-testid="searchbar-button">
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      {searchType === "repository" && languageOptions && setLanguage && (
        <Paper>
          <Autocomplete
            onChange={(event, newValue) => {
              setLanguage(newValue);
            }}
            options={languageOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Language" />}
            data-testid="language-filter"
          />
        </Paper>
      )}
    </Box>
  );
};

export default Searchbar;
