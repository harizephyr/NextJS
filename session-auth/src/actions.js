"use server";
import { getIronSession } from "iron-session";
import { sessionOptions, defaultSession } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};
const db_email = "john@gmail.com";
const db_premium = false;
export const login = async (prevState, formdata) => {
  const session = await getSession();

  const formUser = {
    email: formdata.get("email"),
    password: formdata.get("password"),
  };
  console.log(formUser);
  if (db_email !== formUser.email) {
    return { error: "Invalid Credentials" };
  }
  session.userId = "1";
  session.email = db_email;
  session.premium = db_premium;
  session.isLoggedIn = true;
  await session.save();
  redirect("/");
};
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const changePremium = async () => {
  const session = await getSession();

  session.premium = !session.premium;
  await session.save();
  revalidatePath("/");
};
