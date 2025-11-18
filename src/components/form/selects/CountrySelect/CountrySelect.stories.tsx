import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";

const meta: Meta<typeof CountrySelect> = {
  title: "DesignSystem/Forms/CountrySelect",
  component: CountrySelect,
  args: {
    fullWidth: true,
  },
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithHint: Story = {
  args: {
    hint: "Select your country.",
  },
};

export const ErrorState: Story = {
  args: {
    error: "Please select a country.",
  },
};
