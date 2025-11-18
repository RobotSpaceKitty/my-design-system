import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import { useState } from "react";

const meta: Meta<typeof TextArea> = {
  title: "DesignSystem/Form/Base/TextArea",
  component: TextArea,
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    hint: "You can resize this field vertically.",
    rows: 4,
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!value ? "Message cannot be empty." : ""}
      />
    );
  },
};
