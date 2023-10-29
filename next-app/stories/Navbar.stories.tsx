import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../app/components/Navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Normal: Story = {
  args: {},
};
