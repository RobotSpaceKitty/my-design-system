import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "DesignSystem/Form/Base/Checkbox",
  component: Checkbox,
  args: {
    label: "Accept terms",
    checked: false,
    fullWidth: true,
  },
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    required: { control: "boolean" },
    requiredMark: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
