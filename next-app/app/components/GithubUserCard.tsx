import React from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { GithubUser } from "../types";
import Button from "@mui/material/Button";
import { CardActions, CardContent } from "@mui/material";

export default function GithubUserCard({ user }: { user: GithubUser }) {
  return (
    <Link href={`/users/${user.login}`}>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 128, height: 128 }} src={user.avatar_url} />
          <Typography variant="h5">{user.login}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" href={user.html_url}>
            More
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
