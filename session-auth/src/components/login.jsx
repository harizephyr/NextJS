"use client";
import React from "react";
import { login } from "@/actions";
import { useFormState } from "react-dom";

const Login = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className="flex flex-col items-center justify-center"
        action={formAction}
      >
        <input
          type="text"
          placeholder="email"
          name="email"
          className="p-2 bg-white text-black rounded-md m-5"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-2 bg-white text-black rounded-md m-5"
        />
        <button
          type="submit"
          className="p-2 bg-white text-black rounded-md m-5"
        >
          Login
        </button>
        {state?.error && <div className="text-red-500">{state.error}</div>}
      </form>
    </div>
  );
};

export default Login;
