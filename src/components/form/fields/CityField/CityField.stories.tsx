import type { Meta, StoryObj } from "@storybook/react";
import { CityField } from "./CityField";

const meta: Meta<typeof CityField> = {
  title: "DesignSystem/Form/Fields/CityField",
  component: CityField,
  args: {
    placeholder: "San Francisco",
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof CityField>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithHint: Story = {
  args: {
    hint: "Enter your city.",
  },
};

export const ErrorState: Story = {
  args: {
    error: "City is required.",
  },
};
