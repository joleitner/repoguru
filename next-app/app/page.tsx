"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import Searchbar from "./components/Searchbar";
import GithubUserGrid from "./components/GithubUserGrid";
import { searchUsers } from "./githubApi";
import { GithubUser } from "./types";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<GithubUser[]>([]);

  const handleSearch = async () => {
    const users = await searchUsers(searchTerm);
    setUsers(users);
  };

  return (
    <Container>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <GithubUserGrid users={users} />
    </Container>
  );
}
