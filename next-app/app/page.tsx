"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import Searchbar from "./components/Searchbar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <Container>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    </Container>
  );
}
