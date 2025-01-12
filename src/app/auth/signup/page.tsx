import TestFormContainer from "@/components/templates/CreateAccountForm";

export default function SignUpPage() {
	return (
		<div className="w-1/2 mx-auto">
			<h1 className="text-4xl font-bold pl-4 pt-4">{"Create an account"}</h1>
			<TestFormContainer />
		</div>
	);
}
