import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import { useState } from "react";

const meta: Meta<typeof TextArea> = {
  title: "DesignSystem/Form/Base/TextArea",
  component: TextArea,
  args: {
    label: "Message",
    placeholder: "Type here…",
    rows: 4,
    fullWidth: true,
  },
  parameters: { controls: { expanded: true } },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    rows: { control: "number" },
    required: { control: "boolean" },
    fullWidth: { control: "boolean" },
    hint: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <TextArea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};
