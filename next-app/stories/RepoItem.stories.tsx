import type { Meta, StoryObj } from "@storybook/react";
import RepoItem from "../app/components/RepoItem";

const meta: Meta<typeof RepoItem> = {
  component: RepoItem,
};
export default meta;

type Story = StoryObj<typeof RepoItem>;

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Complete: Story = {
  args: {
    repo: {
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
  },
};
