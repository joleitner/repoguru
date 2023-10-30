import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GitUserCard from "./GitUserCard";
import { GitUser } from "../types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";

interface GitUserGridProps {
  users: GitUser[] | null;
  loading?: boolean;
}
const GitUserGrid: React.FC<GitUserGridProps> = ({ users, loading }) => {
  // initial state is null, when the user has not searched for anything
  if (!users) {
    return <></>;
  }
  // when the user has searched for something, but no results were found
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
  // grid of found users
  return (
    <Container sx={{ mt: "30px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {users.map((user) => (
          <GitUserCard user={user} key={user.id} />
        ))}
      </Box>
    </Container>
  );
};
export default GitUserGrid;
