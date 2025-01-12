"use client";
import { useFormContext, Controller } from "react-hook-form";

import {
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage
} from "@/components/ui/form";
import { InputProps } from "@/components/ui/input";
import { InputField } from "@/components/atoms/InputField";

import { cn } from "@/lib/utils";

type RHFInputProps = InputProps & {
	name: string;
	label?: string;
	description?: string;
};

export default function RHFInput({
	name,
	label,
	description,
	...other
}: RHFInputProps) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<InputField
							className={cn(error && "border-red-500")}
							{...field}
							value={
								typeof field.value === "number" && field.value === 0
									? ""
									: field.value
							}
							{...other}
						/>
					</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					{error && (
						<FormMessage className="text-sm text-red-500">
							{error.message}
						</FormMessage>
					)}
				</FormItem>
			)}
		/>
	);
}
