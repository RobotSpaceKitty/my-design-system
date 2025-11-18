import type { Meta, StoryObj } from "@storybook/react";
import { PromoCodeField } from "./PromoCodeField";

const meta: Meta<typeof PromoCodeField> = {
  title: "DesignSystem/Form/Fields/PromoCodeField",
  component: PromoCodeField,
};
export default meta;

type Story = StoryObj<typeof PromoCodeField>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Optional field" } };
export const ErrorState: Story = { args: { error: "Promo code not valid" } };
