import { render, screen } from "@testing-library/react";
import HomePage from "@/page";

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("should have a searchbar", () => {
    const searchbarField = screen.getByTestId("searchbar-field");
    expect(searchbarField).toBeInTheDocument();
  });

  it("should say 'Find a user'", () => {
    const text = screen.getByPlaceholderText(/Find a user/i);
    expect(text).toBeInTheDocument();
  });
});
