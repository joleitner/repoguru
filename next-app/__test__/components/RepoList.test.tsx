import { render, screen } from "@testing-library/react";
import RepoList from "@/components/RepoList";

const mockRepos = [
  {
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
  },
  {
    id: 2,
    name: "Test Repo 2",
    full_name: "testuser/testrepo2",
    description: "Test Description",
    language: "TypeScript",
    stargazers_count: 0,
    watchers: 1,
    forks: 1,
    html_url: "url",
    owner: {
      id: 1,
      login: "testuser",
      avatar_url: "url",
    },
  },
];

describe("RepoList", () => {
  it("renders skeleton list while loading", () => {
    render(<RepoList loading={true} repos={[]} />);
    const skeletons = screen.getAllByTestId("repoitem-skeleton");
    // Check if skeleton elements are rendered;
    expect(skeletons).toHaveLength(3);
  });

  it("renders no repositories found when empty", () => {
    render(<RepoList loading={false} repos={[]} />);
    const noReposFound = screen.getByText("No repositories found");
    // Check if no repositories found is rendered
    expect(noReposFound).toBeInTheDocument();
  });

  it("renders repo items correct", () => {
    render(<RepoList repos={mockRepos} />);
    const repoTitle1 = screen.getByRole("heading", { name: mockRepos[0].name });
    const repoTitle2 = screen.getByRole("heading", { name: mockRepos[1].name });
    // Check if repository titles are rendered
    expect(repoTitle1).toBeInTheDocument();
    expect(repoTitle2).toBeInTheDocument();
  });
});
