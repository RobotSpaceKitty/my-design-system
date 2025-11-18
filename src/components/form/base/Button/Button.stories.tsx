import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "DesignSystem/Forms/Button",
  component: Button,
  args: {
    children: "Click Me",
    size: "md",
    variant: "primary",
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Success: Story = {
  args: { variant: "success", children: "Looks good!" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Delete" },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-3">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};
