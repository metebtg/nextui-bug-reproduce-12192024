"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@nextui-org/button";

export default function FormButton(props: ButtonProps) {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <Button
      {...props}
      type="submit"
      isLoading={pending}
      isDisabled={pending}
      spinnerPlacement={"end"}
    />
  );
}
