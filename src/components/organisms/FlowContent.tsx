import {
	ReactFlow,
	Connection,
	Edge,
	EdgeChange,
	NodeChange,
	Node,
	ReactFlowProvider
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { JSX } from "react";

type FlowContentProps = {
	nodeTypes: CardNodeTypes;
	nodes: Node[];
	edges: Edge[];
	onNodesChange: (changes: NodeChange[]) => void;
	onEdgesChange: (changes: EdgeChange[]) => void;
	onConnect: (params: Connection) => void;
	theme: string;
	fitView: boolean;
	children: JSX.Element;
};

export default function FlowContent({
	nodes,
	edges,
	onNodesChange,
	onEdgesChange,
	onConnect,
	nodeTypes,
	theme,
	children
}: FlowContentProps) {
	return (
		<div className="w-full h-[90vh] flex flex-row justify-center items-center p-4">
			<ReactFlowProvider>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					proOptions={{ hideAttribution: true }}
					colorMode={theme === "dark" ? "dark" : "light"}
					className={`${
						theme === "dark" ? "react-flow-dark" : ""
					} rounded-2xl`}>
					{children}
				</ReactFlow>
			</ReactFlowProvider>
		</div>
	);
}
