import type { Meta, StoryObj } from "@storybook/react";
import { BillingAddressField } from "./CCBillingAddressField";

const meta: Meta<typeof BillingAddressField> = {
  title: "DesignSystem/Forms/BillingAddressField",
  component: BillingAddressField,
};
export default meta;

type Story = StoryObj<typeof BillingAddressField>;

export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Address required" } };
