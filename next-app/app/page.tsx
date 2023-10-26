"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import Searchbar from "./components/Searchbar";
import GitUserGrid from "./components/GitUserGrid";
import { searchUsers } from "./githubApi";
import { GitUser } from "./types";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<GitUser[]>([]);

  const handleSearch = async () => {
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
