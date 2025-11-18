import type { Meta, StoryObj } from "@storybook/react";
import { DOBField } from "./DOBField";

const meta: Meta<typeof DOBField> = {
  title: "DesignSystem/Form/Fields/DOBField",
  component: DOBField,
  args: {
    placeholder: "MM/DD/YYYY",
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof DOBField>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithHint: Story = {
  args: {
    hint: "Must be 18 years or older.",
  },
};

export const ErrorState: Story = {
  args: {
    error: "Please enter a valid date of birth.",
  },
};
