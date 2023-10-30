import type { Meta, StoryObj } from "@storybook/react";
import RepoList from "../app/components/RepoList";

const meta: Meta<typeof RepoList> = {
  component: RepoList,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};
export default meta;

type Story = StoryObj<typeof RepoList>;

export const Empty: Story = {
  args: {
    repos: [],
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const OneItem: Story = {
  args: {
    repos: [
      {
        id: 1,
        name: "repoguru",
        full_name: "joleitner/repoguru",
        html_url: "https://github.com/joleitner",
        description: "coming soon",
        stargazers_count: 0,
        forks: 0,
        watchers: 0,
        language: "TypeScript",
        owner: {
          login: "joleitner",
          id: 1,
          avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
        },
      },
    ],
  },
};

export const MultipleItems: Story = {
  args: {
    repos: [
      {
        id: 1,
        name: "cardano-cars",
        full_name: "joleitner/repoguru",
        html_url: "https://github.com/joleitner",
        description: "coming soon",
        stargazers_count: 0,
        forks: 0,
        watchers: 0,
        language: "TypeScript",
        owner: {
          login: "joleitner",
          id: 1,
          avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
        },
      },
      {
        id: 2,
        name: "repoguru",
        full_name: "joleitner/repoguru",
        html_url: "https://github.com/joleitner",
        description: "coming soon",
        stargazers_count: 0,
        forks: 0,
        watchers: 0,
        language: "TypeScript",
        owner: {
          login: "joleitner",
          id: 1,
          avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
        },
      },
      {
        id: 3,
        name: "repoguru",
        full_name: "joleitner/repoguru",
        html_url: "https://github.com/joleitner",
        description: "coming soon",
        stargazers_count: 0,
        forks: 0,
        watchers: 0,
        language: "TypeScript",
        owner: {
          login: "joleitner",
          id: 1,
          avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
        },
      },
    ],
  },
};
