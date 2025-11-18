import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "DesignSystem/Form/Base/TextField",
  component: TextField,
  args: {
    label: "Label",
    placeholder: "Type here…",
    fullWidth: true,
    size: "md",
    tone: "default",
  },
  parameters: { controls: { expanded: true } },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    tone: { control: "radio", options: ["default", "success", "error"] },
    required: { control: "boolean" },
    requiredMark: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
