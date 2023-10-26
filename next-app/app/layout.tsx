import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import ThemeRegistry from "./theme/ThemeRegistry";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "RepoGuru",
  description: "A cool app to search for GitHub repositories",
  viewport: "width=device-width, initital-scale=1", // for responsive design (mobile first)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
