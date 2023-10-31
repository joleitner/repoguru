"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import Searchbar from "./components/Searchbar";
import GitUserGrid from "./components/GitUserGrid";
import { searchUsers } from "./githubApi";
import { GitUser } from "./types";

/**
 * Home page with a searchbar to search for Git users
 * @returns {JSX.Element} Home page
 */
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  // users is null when the user has not searched for anything (or resets the search bar)
  const [users, setUsers] = useState<GitUser[] | null>(null);

  const handleSearch = async () => {
    // if the search term is empty, set users to null
    if (searchTerm === "") {
      setUsers(null);
      return;
    }
    const users = await searchUsers(searchTerm);
    setUsers(users);
  };

  return (
    <Container>
      <Searchbar
        searchType="user"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <GitUserGrid users={users} />
    </Container>
  );
}
