import type { Meta, StoryObj } from "@storybook/react";
import { EmailField } from "./EmailField";

const meta: Meta<typeof EmailField> = {
  title: "DesignSystem/Forms/EmailField",
  component: EmailField,
};
export default meta;

type Story = StoryObj<typeof EmailField>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const ErrorState: Story = { args: { error: "Email is required." } };
