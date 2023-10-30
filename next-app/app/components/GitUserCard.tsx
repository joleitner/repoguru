import React from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { GitUser } from "../types";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

export default function GitUserCard({ user }: { user: GitUser }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea href={`/users/${user.login}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 150, height: 150, mt: 3, mb: 2 }}
            src={user.avatar_url}
          />

          <Typography variant="h5">{user.login}</Typography>
          <Typography variant="button" color="primary" sx={{ mt: 3, mb: 1 }}>
            Browse Repositories
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions
        sx={{
          justifyContent: "center",
          my: 1,
          // position: "absolute",
          // bottom: 20,
          // width: "100%",
        }}
      >
        <Button variant="outlined" size="small" href={user.html_url}>
          Browse Repos
        </Button>
      </CardActions> */}
    </Card>
  );
}
