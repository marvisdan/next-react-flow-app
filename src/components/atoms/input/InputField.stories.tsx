import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta = {
	title: "Atoms/InputField",
	component: InputField,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		onSearch: {
			action: "searched",
			description: "Callback fired when Enter is pressed"
		},
		searchIcon: {
			control: "boolean",
			description: "Show/hide search icon",
			defaultValue: false
		},
		placeholder: {
			control: "text",
			description: "Input placeholder text"
		},
		type: {
			control: "select",
			options: ["text", "password", "email", "number"],
			description: "Input type"
		},
		disabled: {
			control: "boolean",
			description: "Disable the input"
		}
	},
	tags: ["autodocs"]
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
	args: {
		placeholder: "Type something...",
		type: "text"
	}
};

export const SearchInput: Story = {
	args: {
		searchIcon: true,
		placeholder: "Search...",
		onSearch: (value) => console.log("Search value:", value)
	}
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled input",
		disabled: true
	}
};

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Enter password"
	}
};
