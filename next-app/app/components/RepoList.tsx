import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import RepoItem from "./RepoItem";
import { Repository } from "../types";

interface RepoListProps {
  repos: Repository[];
}
const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <Container sx={{ mt: "30px" }}>
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
