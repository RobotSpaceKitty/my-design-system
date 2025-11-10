import type {Meta, StoryObj} from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    title: "DesignSystem/Forms/Select",
    component: Select,
    args: {
        label: "Country",
        options: [
            {value: "", label: "Select a country"},
            {value: "us", label: "United States"},
            {value: "ca", label: "Canada"},
            {value: "mx", label: "Mexico"},
        ],
        fullWidth: true,
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithHint: Story = {
    args: {
        hint: "Select your primary location.",
    },
};

export const Required: Story = {
    args: {
        required: true,
    },
};

export const Error: Story = {
    args: {
        required: true,
        error: "Please select a country.",
    },
};