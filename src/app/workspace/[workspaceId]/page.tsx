interface PageProps {
  params: { workspaceId: string };
}

export default function WorkspaceIdPage({ params }: PageProps) {
  return <div>Workspace ID: {params.workspaceId}</div>;
}
