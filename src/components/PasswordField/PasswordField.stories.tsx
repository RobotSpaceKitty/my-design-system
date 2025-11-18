import type { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "./PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "DesignSystem/Forms/PasswordField",
  component: PasswordField,
};
export default meta;

type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const ErrorState: Story = { args: { error: "Password is required." } };
