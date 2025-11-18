import type { Meta, StoryObj } from "@storybook/react";
import { StateSelect } from "./StateSelect";

const meta: Meta<typeof StateSelect> = {
  title: "DesignSystem/Form/Selects/StateSelect",
  component: StateSelect,
  args: {
    fullWidth: true,
  },
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    required: { control: "boolean" },
    requiredMark: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
    autoComplete: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof StateSelect>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithHint: Story = {
  args: {
    hint: "Select your U.S. state.",
  },
};

export const ErrorState: Story = {
  args: {
    error: "Please select a state.",
  },
};
