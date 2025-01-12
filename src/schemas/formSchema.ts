import { z } from "zod";

export const testFormSchema = z
	.object({
		name: z.string().min(2, "Name must be at least 2 characters"),
		email: z.string().email("Please enter a valid email address"),
		password: z.string().min(8, "Password must be at least 8 characters"),
		confirmPassword: z.string().min(8, "Password must be at least 8 characters")
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"]
	});

export type TestFormData = z.infer<typeof testFormSchema>;
