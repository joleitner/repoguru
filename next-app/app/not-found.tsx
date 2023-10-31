import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" mb={2}>
        Not Found
      </Typography>
      <Typography variant="subtitle1">
        Could not find requested resource
      </Typography>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
