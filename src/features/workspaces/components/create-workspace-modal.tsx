import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [open, setOpen] = useCreateWorkspaceModal();

  const { mutate, isLoading } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    setName("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      { name },
      {
        onSuccess(id) {
          toast.success("Workspace created");
          router.push(`/workspace/${id}`);
          handleClose();
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a workspace</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            disabled={isLoading}
            placeholder="Workspace name (e.g. 'Work', 'Personal', etc.)"
            minLength={3}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
          />
          <div className="flex justify-end">
            <Button disabled={isLoading}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
