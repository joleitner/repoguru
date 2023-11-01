import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { GitUser } from "../types";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

interface GitUserCardProps {
  user: GitUser;
}

/**
 * Component to display a git user search result
 * @param {GitUserCardProps} props
 * @returns {JSX.Element} GitHub user card
 */
const GitUserCard: React.FC<GitUserCardProps> = ({ user }) => {
  return (
    <Card sx={{ width: 300, m: 1 }}>
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
          <Typography variant="button" sx={{ mt: 3, mb: 1 }}>
            Browse Repositories
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default GitUserCard;
