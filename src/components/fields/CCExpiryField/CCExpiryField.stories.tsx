import type { Meta, StoryObj } from "@storybook/react";
import { CreditCardExpiryField } from "./CCExpiryField";

const meta: Meta<typeof CreditCardExpiryField> = {
  title: "DesignSystem/Forms/CreditCardExpiryField",
  component: CreditCardExpiryField,
};
export default meta;

type Story = StoryObj<typeof CreditCardExpiryField>;

export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Invalid date" } };
