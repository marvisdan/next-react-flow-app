"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	onSearch?: (value: string) => void;
	searchIcon?: boolean;
	placeholder?: string;
	label?: string;
	type?: string;
}

export function InputField({
	onSearch,
	searchIcon,
	placeholder,
	type,
	...props
}: SearchInputProps) {
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter" && onSearch) {
			onSearch((event.target as HTMLInputElement).value);
		}
	};

	return (
		<div className="relative">
			{searchIcon && (
				<Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			)}
			<Input
				type={type}
				className="pl-8 border-2"
				onKeyDown={handleKeyDown}
				placeholder={placeholder || "Search..."}
				{...props}
			/>
		</div>
	);
}
