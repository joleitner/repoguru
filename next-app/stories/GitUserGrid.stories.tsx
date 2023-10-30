import type { Meta, StoryObj } from "@storybook/react";
import GitUserGrid from "../app/components/GitUserGrid";
import { WithPicture, WithoutPicture } from "./GitUserCard.stories";

const meta: Meta<typeof GitUserGrid> = {
  component: GitUserGrid,
  // decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};
export default meta;

type Story = StoryObj<typeof GitUserGrid>;

export const Empty: Story = {
  args: {
    users: [],
  },
};

export const OneUser: Story = {
  args: {
    users: [
      {
        id: 1,
        login: "joleitner",
        avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
      },
    ],
  },
};

export const MultipleUser: Story = {
  args: {
    users: [
      {
        id: 1,
        login: "joleitner",
        avatar_url: "https://avatars.githubusercontent.com/u/67263598?v=4",
      },
      {
        id: 2,
        login: "gituser",
        avatar_url: "https://avatars.githubusercontent.com/u/106851202?v=4",
      },
      {
        id: 3,
        login: "otheruser",
        avatar_url: "https://avatars.githubusercontent.com/u/106851212?v=4",
      },
      {
        id: 4,
        login: "anotheruser",
        avatar_url: "https://avatars.githubusercontent.com/u/116851212?v=4",
      },
      {
        id: 5,
        login: "lastuser",
        avatar_url: "https://avatars.githubusercontent.com/u/106851212?v=4",
      },
    ],
  },
};
