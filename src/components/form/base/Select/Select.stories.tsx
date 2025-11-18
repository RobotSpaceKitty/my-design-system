import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "DesignSystem/Form/Base/Select",   // still your parent grouping
  component: Select,

  // Generic default props (NOT country-specific)
  args: {
    label: "Select an option",
    options: [
      { value: "option1", label: "Option One" },
      { value: "option2", label: "Option Two" },
      { value: "option3", label: "Option Three" },
    ],
    fullWidth: true,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "Choose any value from the list.",
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
    error: "A selection is required.",
  },
};
