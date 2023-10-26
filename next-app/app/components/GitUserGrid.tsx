import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitUserCard from "./GitUserCard";
import { GitUser } from "../types";

interface GithubUserGridProps {
  users: GitUser[];
}
const GitUserGrid: React.FC<GithubUserGridProps> = ({ users }) => {
  return (
    <Container sx={{ mt: "30px" }}>
      <Grid container spacing={2}>
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
