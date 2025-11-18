import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "DesignSystem/Form/Base/TextField",
  component: TextField,
  args: {
    label: "Text Field",
    placeholder: "Enter text...",
    size: "md",
    fullWidth: true,
    tone: "default",
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
    hint: "Helpful description for this field.",
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
    error: "This field is required.",
  },
};

export const SuccessTone: Story = {
  args: {
    tone: "success",
    hint: "Looks good.",
    defaultValue: "Sample value",
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
