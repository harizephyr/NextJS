import Link from "next/link";
import React from "react";
import LogoutForm from "./logoutForm";
import { getSession } from "@/actions";
import { defaultSession } from "@/lib";

const Nav = async () => {
  const session = await getSession();
  console.log(session);
  return (
    <div className="flex justify-center">
      <Link href="/" className="m-5">
        Home
      </Link>
      <Link href="/premium" className="m-5">
        Premium
      </Link>
      <Link href="/profile" className="m-5">
        Profile
      </Link>
      <Link href="/login" className="m-5">
        Login
      </Link>
      {session.isLoggedIn && <LogoutForm />}
    </div>

    // create a beatiful nav bar with links to the home page, about page, contact page, and login page
  );
};

export default Nav;
