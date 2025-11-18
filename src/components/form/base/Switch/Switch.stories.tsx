import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "DesignSystem/Form/Base/Switch",
  component: Switch,
  args: {
    label: "Enable feature",
    checked: false,
    fullWidth: true,
  },
  parameters: { controls: { expanded: true } },
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    required: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
