"use server";

import { TestFormData } from "@/schemas/formSchema";

export async function submitForm(data: TestFormData) {
	return {
		success: true,
		data
	};
}
