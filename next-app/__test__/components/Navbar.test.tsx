import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "@/components/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it("should show title", () => {
    const header = screen.getByRole("heading");
    const headerText = "RepoGuru";
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(headerText);
  });
});
