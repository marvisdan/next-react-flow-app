import { Handle, Position } from "@xyflow/react";
import { JSX } from "react";

const NodeCardWrapper = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<Handle type="target" position={Position.Top} />
			{children}
			<Handle type="source" position={Position.Bottom} />
		</>
	);
};

export default NodeCardWrapper;
