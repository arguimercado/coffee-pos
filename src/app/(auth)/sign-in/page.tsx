"use client";
import UserAuth from "@/components/user-auth";
import { SignInWithCredential } from "@/lib/actions/auth.action";
import { SignInSchema } from "@/lib/validation";
import React from "react";

const SignIn = () => {
  
   return (
      <UserAuth
         formType="SIGN_IN"
         schema={SignInSchema}
         defaultValues={{ email: "", password: "" }}
         onSubmit={SignInWithCredential}
      />
   );
};

export default SignIn;
