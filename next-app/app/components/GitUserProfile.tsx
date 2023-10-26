import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { GitUser } from "../types";
import Button from "@mui/material/Button";

export default function GitUserProfile({ user }: { user: GitUser }) {
  return (
    <Box>
      <Avatar sx={{ width: 128, height: 128 }} src={user.avatar_url} />
      <Typography variant="h5">{user.name}</Typography>
      <Typography variant="subtitle1">{user.login}</Typography>
      <Typography variant="subtitle2">{`Location: ${user.location}`}</Typography>
      <Typography variant="body2">{user.bio}</Typography>
      <Chip
        variant="outlined"
        color="secondary"
        label={`Followers: ${user.followers}`}
      />
      <Chip
        variant="outlined"
        color="secondary"
        label={`Following: ${user.following}`}
      />
      <Chip
        variant="outlined"
        color="secondary"
        label={`Public repositories: ${user.public_repos}`}
      />

      <Button variant="contained" href={user.html_url}>
        See GitHub Profile
      </Button>
    </Box>
  );
}
