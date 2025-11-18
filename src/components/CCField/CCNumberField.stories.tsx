import type { Meta, StoryObj } from "@storybook/react";
import { CreditCardNumberField } from "./CCNumberField";

const meta: Meta<typeof CreditCardNumberField> = {
  title: "DesignSystem/Forms/CreditCardNumberField",
  component: CreditCardNumberField,
};
export default meta;

type Story = StoryObj<typeof CreditCardNumberField>;

export const Default: Story = {};
export const ErrorState: Story = { args: { error: "Invalid card number" } };
