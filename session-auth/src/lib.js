import { cookies } from "next/headers";
import { SessionOptions } from "iron-session";

export const defaultSession = {
  userId: "",
  email: "",
  name: "",
  role: "",
  premium: false,
  profileImage: "",
  isBlocked: false,
  isLoggedIn: false,
};

export const sessionOptions = {
  password: process.env.SECRET_KEY,
  cookieName: "care-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // sameSite: "strict",
  },
};
