import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GitHub from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

/**
 * About page with some information about the project
 * @returns {JSX.Element} About page
 */
export default function AboutPage() {
  return (
    <Container>
      <Box textAlign="center" mt={10}>
        <Typography variant="h3" mb={3}>
          About RepoGuru
        </Typography>
        <Typography variant="body1">
          RepoGuru is a search engine for GitHub repositories. It&apos;s built
          with Next.js and Material UI. It uses the GitHub API to search for
          repositories.
        </Typography>
        <Typography variant="body1">
          This is a demo project to demonstrate development with NextJS (React).
          You can also find stories created with Storybook for the developed
          components.
        </Typography>
        <Typography variant="body1">
          Some unit tests have also been added for demonstration purposes.
        </Typography>
        <Typography variant="body1" mt={3}>
          Check it out on my GitHub repo, or try to find it on RepoGuru 😉
        </Typography>
        <IconButton href="https://github.com/joleitner/repoguru">
          <GitHub />
        </IconButton>
      </Box>
    </Container>
  );
}
