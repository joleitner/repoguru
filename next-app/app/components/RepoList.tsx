import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import SourceIcon from "@mui/icons-material/Source";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RepoItem from "./RepoItem";
import { Repository } from "../types";

interface RepoListProps {
  repos: Repository[];
  loading?: boolean;
}
const RepoList: React.FC<RepoListProps> = ({ repos, loading }) => {
  // while loading repositories, show 3 skeleton items
  if (loading) {
    return (
      <Container sx={{ mt: "30px" }}>
        <List>
          <Divider />
          <ListItem>
            <RepoItem loading repo={null} />
          </ListItem>
          <Divider />
          <ListItem>
            <RepoItem loading repo={null} />
          </ListItem>
          <Divider />
          <ListItem>
            <RepoItem loading repo={null} />
          </ListItem>
          <Divider />
        </List>
      </Container>
    );
  }
  // when no repositories are found, show notification
  if (repos.length === 0) {
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
        <SourceIcon
          sx={{
            fontSize: 100,
          }}
          color="disabled"
        />
        <Typography variant="h6" color={"text.disabled"}>
          No repositories found
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 1 }}>
      <List>
        <Divider />
        {repos.map((repo) => (
          <>
            <ListItem key={repo.id}>
              <RepoItem repo={repo} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
};

export default RepoList;
