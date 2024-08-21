"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRef } from "react";

type DialogueFormType = {
  render: (formRef: React.RefObject<HTMLFormElement>) => JSX.Element;
  triggerLabel?: string;
  //   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
const useGenericDialogueForm = (props: DialogueFormType) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default form submission behavior on click
    formRef.current?.requestSubmit();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{props?.triggerLabel ?? "Open"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        {props.render(formRef)}
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default useGenericDialogueForm;
