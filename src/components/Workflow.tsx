import { useState } from "react";
import { WorkflowState0 } from "./WorkflowState0";
import { WorkflowState1 } from "./WorkflowState1";
import { WorkflowState2 } from "./WorkflowState2";
export function Workflow() {
  const [active, setActive] = useState(0);
  const State = [WorkflowState0, WorkflowState1, WorkflowState2][active];
  return <State setActive={setActive} />;
}
