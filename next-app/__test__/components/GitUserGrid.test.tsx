import { render, screen } from "@testing-library/react";
import GitUserGrid from "@/components/GitUserGrid";

const mockUsers = [
  {
    id: 1,
    login: "testuser",
    avatar_url: "url",
  },
  {
    id: 2,
    login: "testuser2",
    avatar_url: "url2",
  },
];

describe("GitUserGrid", () => {
  it("renders no users found when empty", () => {
    render(<GitUserGrid users={[]} />);
    const noUsersFound = screen.getByText("No users found");
    // Check if no users found is rendered
    expect(noUsersFound).toBeInTheDocument();
  });

  it("renders user cards correct ", () => {
    render(<GitUserGrid users={mockUsers} />);
    const username1 = screen.getByRole("heading", { name: mockUsers[0].login });
    const username2 = screen.getByRole("heading", { name: mockUsers[1].login });
    // Check if user names are rendered
    expect(username1).toBeInTheDocument();
    expect(username2).toBeInTheDocument();
  });
});
