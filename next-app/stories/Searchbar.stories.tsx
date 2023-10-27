import React, { useState } from "react";
import Searchbar from "../app/components/Searchbar";

export default {
  title: "Searchbar",
  component: Searchbar,
};

// Mock handleSearch function
const handleSearch = () => {
  console.log("Mock search function called");
};

export const UserSearchbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Set an initial search term

  return (
    <Searchbar
      searchType="user"
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    />
  );
};

export const RepositorySearchbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Set an initial search term

  return (
    <Searchbar
      searchType="repository"
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    />
  );
};
