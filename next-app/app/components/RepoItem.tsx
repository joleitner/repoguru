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
import Skeleton from "@mui/material/Skeleton";

import { GitUser, Repository } from "../types";
import Button from "@mui/material/Button";
import { CardActions, CardContent } from "@mui/material";

interface RepoItemProps {
  repo: Repository | null;
  loading?: boolean;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo, loading }) => {
  if (loading) {
    return (
      <Container sx={{ p: "5px 0" }}>
        <Skeleton variant="text" width={150} sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" width={300} sx={{ fontSize: "1.5rem" }} />
        <Box sx={{ display: "flex", justifyContent: "end", gap: "10px" }}>
          <Skeleton
            variant="rounded"
            width={100}
            height={30}
            sx={{ borderRadius: "1.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={40}
            height={30}
            sx={{ borderRadius: "1.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={40}
            height={30}
            sx={{ borderRadius: "1.5rem" }}
          />
        </Box>
      </Container>
    );
  }
  if (!repo) {
    return <></>;
  }
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
          icon={<StarOutline />}
          sx={{ m: "0 5px" }}
          variant="outlined"
          label={repo.stargazers_count}
        />
        <Chip icon={<ForkRight />} variant="outlined" label={repo.forks} />
      </Box>
    </Container>
  );
};
export default RepoItem;
