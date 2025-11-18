import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "DesignSystem/Form/Base/Button",
  component: Button,
  args: {
    children: "Click Me",
    size: "md",
    variant: "primary",
    fullWidth: false,
    disabled: false,
  },
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "success", "danger"],
    },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
