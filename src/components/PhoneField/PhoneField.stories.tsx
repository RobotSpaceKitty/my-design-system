import type { Meta, StoryObj } from "@storybook/react";
import { PhoneField } from "./PhoneField";

const meta: Meta<typeof PhoneField> = {
  title: "DesignSystem/Forms/PhoneField",
  component: PhoneField,
};
export default meta;

type Story = StoryObj<typeof PhoneField>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const ErrorState: Story = { args: { error: "Invalid phone number" } };
