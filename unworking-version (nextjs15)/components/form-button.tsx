"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@nextui-org/button";
// import { Spinner } from "@nextui-org/spinner";

export default function FormButton(props: ButtonProps) {
  const { pending } = useFormStatus();
  console.log(pending);

  // Following return not updates visuality
  return (
    <Button
      {...props}
      type="submit"
      isLoading={pending}
      isDisabled={pending}
      spinnerPlacement={"end"}
    />
  );

  // Following works fine
  // return (
  //   <Button
  //     {...props}
  //     type="submit"
  //     endContent={pending && <Spinner />}
  //     spinnerPlacement={"end"}
  //   />
  // );
}
