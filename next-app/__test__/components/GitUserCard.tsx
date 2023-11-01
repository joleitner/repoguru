import { render, screen } from "@testing-library/react";
import GitUserCard from "@/components/GitUserCard";

const mockUser = {
  id: 1,
  login: "testuser",
  avatar_url: "url",
};

describe("GitUserCard", () => {
  it("renders user details", () => {
    render(<GitUserCard user={mockUser} />);

    // Check if user details are rendered
    const username = screen.getByRole("heading");
    expect(username).toBeInTheDocument();
    expect(username).toHaveTextContent(mockUser.login);
    const avatar = screen.getByRole("img");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", mockUser.avatar_url);
  });

  it("has link to user page", () => {
    render(<GitUserCard user={mockUser} />);

    // Check if link is rendered
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/users/${mockUser.login}`);
  });
});
