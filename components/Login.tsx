import React from 'react'
import { SignInButton } from "@clerk/nextjs";

const Login = () => {
  return (
    <SignInButton mode="modal">
      <button className="hoverEffect hover:text-lightGreen hover:scale-105 group relative font-semibold">
        Login
      </button>
    </SignInButton>
  );
}

export default Login