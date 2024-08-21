"use client";

import useGenericDialogueForm from "@/hooks/useGenericDialogueForm";
import React, { useActionState } from "react";

const Form = () => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      //   const error = await updateName(formData.get("name"));

      const name = formData.get("name");
      console.log({ name });
      if (error) {
        return error;
      }
      //   redirect("/path");
      return null;
    },
    null
  );

  console.log({ isPending, error });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    submitAction(formData);
    console.log("Form submitted");
  };
  const form = useGenericDialogueForm({
    triggerLabel: "Open form",
    render: (ref: React.RefObject<HTMLFormElement>) => (
      <form ref={ref} onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input name="name" type="text" />
      </form>
    ),
    // onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   console.log("Form submitted", e);
    // },
  });
  return form;
};

export default Form;
