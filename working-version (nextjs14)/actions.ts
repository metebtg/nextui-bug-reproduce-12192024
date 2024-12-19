"use server";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function publish() {
  console.log("wait");
  await wait(3000);
  console.log("done");
  return true;
}
