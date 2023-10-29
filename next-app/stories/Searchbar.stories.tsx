import type { Meta, StoryObj } from "@storybook/react";
import Searchbar from "../app/components/Searchbar";

const meta: Meta<typeof Searchbar> = {
  component: Searchbar,
};
export default meta;

type Story = StoryObj<typeof Searchbar>;

export const UserSearchbar: Story = {
  args: {
    searchType: "user",
    searchTerm: "",
    setSearchTerm: () => {},
    handleSearch: () => {},
  },
};

export const RepositorySearchbar: Story = {
  args: {
    ...UserSearchbar.args,
    searchType: "repository",
  },
};
