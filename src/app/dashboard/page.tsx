import FlowBuilder from "@/components/templates/FlowBuilder";
import { ReactFlowProvider } from "@xyflow/react";

export default function Dashboard() {
	return (
		<ReactFlowProvider>
			<div className="p-5">
				<FlowBuilder />
			</div>
		</ReactFlowProvider>
	);
}
