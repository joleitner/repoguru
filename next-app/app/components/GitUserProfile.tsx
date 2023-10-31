import React from "react";
import Avatar from "@mui/material/Avatar";
import RoomIcon from "@mui/icons-material/Room";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { GitUser } from "../types";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

interface GitUserProfileProps {
  user: GitUser | null;
  loading?: boolean;
}

const GitUserProfile: React.FC<GitUserProfileProps> = ({ user, loading }) => {
  if (loading) {
    return (
      <Paper variant="outlined" square sx={{ width: "100%", m: 1 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                m: 3,
              }}
            >
              <Skeleton
                variant="circular"
                sx={{ width: 150, height: 150 }}
              ></Skeleton>
              <Skeleton
                variant="text"
                width={150}
                sx={{ fontSize: "1.6rem" }}
              />
              <Skeleton
                variant="text"
                width={150}
                sx={{ fontSize: "1.3rem" }}
              />
              <Skeleton
                variant="text"
                width={150}
                sx={{ fontSize: "1.1rem" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                alignItems: { xs: "center", md: "flex-start" },
                m: 3,
              }}
            >
              <Box>
                <Skeleton
                  variant="text"
                  width={50}
                  sx={{ fontSize: "1.5rem" }}
                />
                <Skeleton variant="rectangular" width={300} height={70} />
              </Box>
              <Skeleton
                variant="rounded"
                sx={{ mt: 2 }}
                height={30}
                width={150}
              />
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
            columnGap: "10px",
            rowGap: "5px",
            m: 1,
          }}
        >
          <Skeleton
            variant="rounded"
            width={100}
            height={30}
            sx={{ borderRadius: "1.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={100}
            height={30}
            sx={{ borderRadius: "1.5rem" }}
          />
          <Skeleton
            variant="rounded"
            width={100}
            height={30}
            sx={{ borderRadius: "1.5rem" }}
          />
        </Box>
      </Paper>
    );
  }

  if (!user) {
    return (
      <Container
        sx={{
          mt: "50px",
          textAlign: "center",
        }}
      >
        <AccountCircleIcon
          sx={{
            fontSize: 100,
          }}
          color="disabled"
        />
        <Typography variant="h6" color={"text.disabled"}>
          User does not exist
        </Typography>
      </Container>
    );
  }

  return (
    <Paper variant="outlined" square sx={{ width: "100%", m: 1 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              m: 3,
            }}
          >
            <Avatar sx={{ width: 150, height: 150 }} src={user.avatar_url} />
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="subtitle1">@{user.login}</Typography>
            {user.location && (
              <Typography variant="subtitle2">
                <RoomIcon fontSize="small" sx={{ marginBottom: "-3px" }} />{" "}
                {user.location}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              alignItems: { xs: "center", md: "flex-start" },
              m: 3,
            }}
          >
            {user.bio ? (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  Bio
                </Typography>
                <Typography variant="body2">{user.bio}</Typography>
              </Box>
            ) : (
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, color: "text.disabled" }}
                >
                  Bio
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "text.disabled" }}
                >
                  No bio provided
                </Typography>
              </Box>
            )}

            <Button variant="outlined" sx={{ mt: 2 }} href={user.html_url}>
              See GitHub Profile
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "center",
          columnGap: "10px",
          rowGap: "5px",
          m: 1,
        }}
      >
        <Chip color="secondary" label={`Followers: ${user.followers}`} />
        <Chip color="secondary" label={`Following: ${user.following}`} />
        <Chip
          color="secondary"
          label={`Public repositories: ${user.public_repos}`}
        />
      </Box>
    </Paper>
  );
};
export default GitUserProfile;
