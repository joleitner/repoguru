"use client";

import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import GithubUserCard from "../../components/GithubUserCard";
import Searchbar from "../../components/Searchbar";
import { GithubUser } from "../../types";
import { getUser } from "../../githubApi";

export default function UserPage({ params }: { params: { name: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<GithubUser | null>();

  useEffect(() => {
    getUser(params.name).then((user) => setUser(user));
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {user && <GithubUserCard user={user} />}
      </Box>
    </Container>
  );
}
