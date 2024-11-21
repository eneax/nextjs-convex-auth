"use client";

import { useWorkspaceId } from "@/hooks/use-workspace-id";

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspaceId();

  return <div>Workspace ID: {workspaceId}</div>;
}
