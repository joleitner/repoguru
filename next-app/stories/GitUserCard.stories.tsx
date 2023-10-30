import type { Meta, StoryObj } from "@storybook/react";
import GitUserCard from "../app/components/GitUserCard";

const meta: Meta<typeof GitUserCard> = {
  component: GitUserCard,
};
export default meta;

type Story = StoryObj<typeof GitUserCard>;

export const WithPicture: Story = {
  args: {
    user: {
      login: "joleitner",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
    },
  },
};

export const WithoutPicture: Story = {
  name: "Github placholder picture",
  args: {
    user: {
      login: "gituser",
      id: 2,
      avatar_url: "https://avatars.githubusercontent.com/u/106851202?v=4",
    },
  },
};
