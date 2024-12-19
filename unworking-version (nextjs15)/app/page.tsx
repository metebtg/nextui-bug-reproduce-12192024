import FormButton from "@/components/form-button";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function publish() {
  "use server";
  console.log("wait");
  await wait(3000);
  console.log("done");
  return "hello";
}

export default async function Home() {
  return (
    <>
      <form action={publish}>
        <FormButton>Publish</FormButton>
      </form>
    </>
  );
}
