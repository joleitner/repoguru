import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitUserCard from "./GitUserCard";
import { GitUser } from "../types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";

interface GithubUserGridProps {
  users: GitUser[];
}
const GitUserGrid: React.FC<GithubUserGridProps> = ({ users }) => {
  if (!users) {
    return <></>;
  }
  if (users.length === 0) {
    return (
      <Container
        sx={{
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AccountCircleIcon
          sx={{
            fontSize: 180,
            "@media (max-width: 600px)": {
              fontSize: "120px", // Adjust the size for smaller screens
            },
          }}
          color="disabled"
        />
        <Typography variant="h5">No users found</Typography>
      </Container>
    );
  }
  return (
    <Container sx={{ mt: "30px" }}>
      <Grid container rowSpacing={2}>
        {users.map((user) => (
          // one item for mobile, 2 for tablet, 3 for desktop
          <Item xs={12} sm={6} md={4} key={user.id}>
            <GitUserCard user={user} />
          </Item>
        ))}
      </Grid>
    </Container>
  );
};
export default GitUserGrid;
