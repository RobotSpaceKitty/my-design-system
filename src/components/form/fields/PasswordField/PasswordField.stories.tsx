import type { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "./PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "DesignSystem/Form/Fields/PasswordField",
  component: PasswordField,
  args: {
    placeholder: "Enter your password",
    fullWidth: true,
  },
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof PasswordField>;
export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithHint: Story = { args: { hint: "Must be at least 12 characters." } };
export const ErrorState: Story = { args: { error: "Password is required." } };
