import { logout } from "@/actions";
import React from "react";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button className="px-1 bg-white text-black rounded-md m-5">
        Logout
      </button>
    </form>
  );
};

export default LogoutForm;
