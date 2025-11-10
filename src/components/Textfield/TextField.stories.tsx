import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "DesignSystem/Forms/TextField",
  component: TextField,
  args: {
    label: "Email",
    placeholder: "you@example.com",
    size: "md",
    fullWidth: true,
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "We'll never share your email.",
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Error: Story = {
  args: {
    required: true,
    error: "Email is required.",
  },
};

export const SuccessTone: Story = {
  args: {
    tone: "success",
    hint: "Looks good.",
    defaultValue: "will@example.com",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <TextField {...args} size="sm" label="Small" />
      <TextField {...args} size="md" label="Medium" />
      <TextField {...args} size="lg" label="Large" />
    </div>
  ),
  args: {
    placeholder: "Type here",
  },
};
