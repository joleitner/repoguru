import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Code from "@mui/icons-material/Code";
import Star from "@mui/icons-material/Star";
import StarOutline from "@mui/icons-material/StarOutline";
import ForkRight from "@mui/icons-material/ForkRight";

import { GitUser, Repository } from "../types";
import Button from "@mui/material/Button";
import { CardActions, CardContent } from "@mui/material";

export default function RepoItem({ repo }: { repo: Repository }) {
  return (
    <Container sx={{ p: "5px 0" }}>
      <Typography variant="h5">{repo.name}</Typography>
      <Typography variant="body1">{repo.description}</Typography>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        {repo.language && (
          <Chip
            icon={<Code />}
            sx={{ m: "0 5px" }}
            label={repo.language}
            color="secondary"
          />
        )}
        <Chip
          icon={repo.stargazers_count > 0 ? <Star /> : <StarOutline />}
          sx={{ m: "0 5px" }}
          variant="outlined"
          label={repo.stargazers_count}
        />
        <Chip icon={<ForkRight />} variant="outlined" label={repo.forks} />
      </Box>
    </Container>
  );
}
