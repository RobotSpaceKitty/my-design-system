import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "DesignSystem/Form/Base/FileUpload",
  component: FileUpload,
  args: {
    label: "Upload File",
    fullWidth: true,
  },
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: { control: "text" },
    accept: { control: "text" },
    required: { control: "boolean" },
    requiredMark: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {};
