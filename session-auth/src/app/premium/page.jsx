import { getSession } from "@/actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

const Premium = async () => {
  const session = await getSession();
  if (!session.premium) redirect("/");
  return <div>This is an exclusive content for Premium Users</div>;
};

export default Premium;
