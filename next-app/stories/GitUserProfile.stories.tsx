import type { Meta, StoryObj } from "@storybook/react";
import GitUserProfile from "../app/components/GitUserProfile";

const meta: Meta<typeof GitUserProfile> = {
  component: GitUserProfile,
};
export default meta;

type Story = StoryObj<typeof GitUserProfile>;

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Complete: Story = {
  args: {
    user: {
      login: "joleitner",
      name: "Jonas Leitner",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
      html_url: "https://github.com/joleitner",
      bio: "I'm a software developer.",
      public_repos: 3,
      followers: 0,
      following: 2,
      location: "Munich, Germany",
    },
  },
};

export const WithoutBio: Story = {
  args: {
    user: {
      login: "joleitner",
      name: "Jonas Leitner",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
      html_url: "https://github.com/joleitner",
      public_repos: 3,
      followers: 0,
      following: 2,
      location: "Munich, Germany",
    },
  },
};

export const WithoutLocation: Story = {
  args: {
    user: {
      login: "joleitner",
      name: "Jonas Leitner",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
      html_url: "https://github.com/joleitner",
      bio: "I'm a software developer.",
      public_repos: 3,
      followers: 0,
      following: 2,
    },
  },
};
