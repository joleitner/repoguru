import { render, screen } from "@testing-library/react";
import RepoItem from "@/components/RepoItem";

const mockRepo = {
  id: 1,
  name: "Test Repo",
  full_name: "testuser/testrepo",
  description: "Test Description",
  language: "JavaScript",
  stargazers_count: 0,
  watchers: 1,
  forks: 1,
  html_url: "url",
  owner: {
    id: 1,
    login: "testuser",
    avatar_url: "url",
  },
};

describe("RepoItem", () => {
  it("renders skeleton while loading", () => {
    render(<RepoItem loading={true} repo={null} />);
    const skeleton = screen.getByTestId("repoitem-skeleton");
    // Check if skeleton elements are rendered
    expect(skeleton).toBeInTheDocument();
  });

  it("renders repository details", () => {
    render(<RepoItem repo={mockRepo} />);

    // Check if repository details are rendered
    const repoTitle = screen.getByRole("heading");
    expect(repoTitle).toBeInTheDocument();
    expect(repoTitle).toHaveTextContent(mockRepo.name);
    expect(screen.getByText(mockRepo.description)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.language)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.watchers)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.forks)).toBeInTheDocument();
  });

  it("has a link to the GitHub repository page", () => {
    render(<RepoItem repo={mockRepo} />);
    const repoLink = screen.getByRole("link");
    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute("href", mockRepo.html_url);
  });
});
