import AssetList from "@/components/templates/AssetList";
import { Navbar } from "@/components/molecules/NavBar";

export default function Home() {
	return (
		<main className="p-5 flex flex-col gap-2">
			<Navbar />
			<div className="w-full h-[90vh] bg-green-100 dark:bg-blue-100 rounded-xl flex flex-row justify-center items-center">
				<AssetList />
			</div>
		</main>
	);
}
