"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface DatePickerProps {
	name: string;
	label?: string;
	placeholder?: string;
}

export default function RHFDatePicker({
	name,
	label,
	placeholder
}: DatePickerProps) {
	const {
		control,
		formState: { errors }
	} = useFormContext();

	return (
		<FormItem>
			{label && <FormLabel>{label}</FormLabel>}
			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					const { value, onChange } = field;
					const date = value ? new Date(value) : undefined;

					return (
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={"outline"}
									className={cn(
										"w-[280px] justify-start text-left font-normal",
										!value && "text-muted-foreground",
										errors[name] && "border-red-500"
									)}>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{value ? format(date!, "PPP") : <span>{placeholder}</span>}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={date}
									onSelect={(newDate) => {
										onChange(newDate ? newDate.toISOString() : "");
									}}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					);
				}}
			/>
			{errors[name] && (
				<FormMessage className="text-sm text-red-500">
					{errors[name]?.message as string}
				</FormMessage>
			)}
		</FormItem>
	);
}
