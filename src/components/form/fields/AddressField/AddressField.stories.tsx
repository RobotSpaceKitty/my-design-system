import type { Meta, StoryObj } from "@storybook/react";
import { AddressField } from "./AddressField";

const meta: Meta<typeof AddressField> = {
  title: "DesignSystem/Form/Fields/AddressField",
  component: AddressField,
  args: {
    placeholder: "123 Main St",
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

type Story = StoryObj<typeof AddressField>;
export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithHint: Story = { args: { hint: "Street address where you live" } };
export const ErrorState: Story = { args: { error: "Invalid address" } };
