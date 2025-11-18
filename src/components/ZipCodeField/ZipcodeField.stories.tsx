import type { Meta, StoryObj } from "@storybook/react";
import { ZipCodeField } from "./ZipCodeField";

const meta: Meta<typeof ZipCodeField> = {
  title: "DesignSystem/Forms/ZipCodeField",
  component: ZipCodeField,
};
export default meta;

type Story = StoryObj<typeof ZipCodeField>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const ErrorState: Story = { args: { error: "Invalid ZIP Code" } };
