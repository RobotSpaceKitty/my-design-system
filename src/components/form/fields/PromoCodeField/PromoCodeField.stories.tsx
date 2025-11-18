import type { Meta, StoryObj } from "@storybook/react";
import { PromoCodeField } from "./PromoCodeField";

const meta: Meta<typeof PromoCodeField> = {
  title: "DesignSystem/Form/Fields/PromoCodeField",
  component: PromoCodeField,
  args: {
    placeholder: "SAVE20",
  },
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof PromoCodeField>;
export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Optional input" } };
export const ErrorState: Story = { args: { error: "Promo code not valid" } };
