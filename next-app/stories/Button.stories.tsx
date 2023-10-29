import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.component";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click me!",
    variant: "contained",
    color: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "outlined",
    color: "secondary",
  },
};
