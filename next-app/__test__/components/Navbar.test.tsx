import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "@/components/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it("should show a title", () => {
    const header = screen.getByRole("heading");
    const headerText = "RepoGuru";
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(headerText);
  });

  it("should have a 'about' link", () => {
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  it("should have a 'home' link", () => {
    const aboutLink = screen.getByRole("link", { name: /home/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/");
  });
});
