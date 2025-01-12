"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/atoms/Button";
import RHFInput from "@/components/organisms/RHFInput";

import { toast } from "@/hooks/use-toast";
import { submitForm } from "@/app/auth/actions/submitForm";
import { testFormSchema, TestFormData } from "@/schemas/formSchema";

const defaultValues: TestFormData = {
	email: "",
	name: "",
	password: "",
	confirmPassword: ""
};

const onSubmit = (data: TestFormData) => async (reset: () => void) => {
	try {
		const result = await submitForm(data);

		toast({
			title: "Account created successfully",
			description: `See here: ${JSON.stringify(result)}`,
			variant: "success"
		});
		reset();
	} catch (error: unknown) {
		if (error instanceof Error) {
			toast({
				title: "Error creating account",
				description: error.message ?? "Something went wrong",
				variant: "destructive"
			});
		}
	}
};

export default function CreateAccountForm() {
	const methods = useForm<TestFormData>({
		resolver: zodResolver(testFormSchema),
		defaultValues
	});

	const { handleSubmit, reset } = methods;

	return (
		<div className="p-6 rounded-lg">
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit((data) => onSubmit(data)(reset))}
					className="space-y-4">
					<RHFInput name="name" placeholder="Name" />
					<RHFInput name="email" type="email" placeholder="Email" />
					<RHFInput name="password" type="password" placeholder="Password" />
					<RHFInput
						name="confirmPassword"
						type="password"
						placeholder="Confirm Password"
					/>
					<Button variant="primary" size="md" type="submit">
						{"Submit"}
					</Button>
				</form>
			</FormProvider>
		</div>
	);
}
