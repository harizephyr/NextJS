import { getSession, changePremium } from "@/actions";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/");
  return (
    <>
      Welcome, {session.email}!
      <p>
        You are a{" "}
        <b className="text-green-500">{session.premium ? "Premium" : "Free"}</b>{" "}
        User
      </p>
      <form action={changePremium}>
        <button className="border rounded-md p-2" type="submit">
          {!session.premium ? "Buy" : "Cancel"} Premium
        </button>
      </form>
    </>
  );
};

export default Profile;
