import type { Meta, StoryObj } from "@storybook/react";
import { CCBillingAddressField } from "./CCBillingAddressField";

const meta: Meta<typeof CCBillingAddressField> = {
  title: "DesignSystem/Form/Fields/BillingAddressField",
  component: CCBillingAddressField,
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

type Story = StoryObj<typeof CCBillingAddressField>;
export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Address required" } };
