import type { Meta, StoryObj } from "@storybook/react";
import { CCExpiryField } from "./CCExpiryField";

const meta: Meta<typeof CCExpiryField> = {
  title: "DesignSystem/Form/Fields/CCExpiryField",
  component: CCExpiryField,
  args: {
    placeholder: "MM/YY",
  },
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof CCExpiryField>;
export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Invalid date" } };
