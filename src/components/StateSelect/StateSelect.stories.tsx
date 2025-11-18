import type { Meta, StoryObj } from "@storybook/react";
import { StateSelect } from "./StateSelect";

const meta: Meta<typeof StateSelect> = {
  title: "DesignSystem/Forms/StateSelect",
  component: StateSelect,
  args: {
    fullWidth: true,
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
