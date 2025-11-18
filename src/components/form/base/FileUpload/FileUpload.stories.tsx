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
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "Accepted formats: PDF, JPG, PNG",
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    error: "File is required.",
    required: true,
  },
};
