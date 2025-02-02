"use client"
import React from 'react'
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {toast} from "@/hooks/use-toast";

import ROUTES from "@/data/routes";
import {signIn} from "next-auth/react";




const SocialAuth = () => {

  const handleSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false
      })
    }catch (error) {
      console.log(error)
      toast({
        title: "Sign In Error",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive"
      });
    }
  }

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">

      <Button
        variant={"theme"}
        className="body-medium min-h-12 flex-1 rounded-2 px-4 py-3"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button
        variant={"theme"}
        className="body-medium min-h-12 flex-1 rounded-2 px-4 py-3"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  )
}
export default SocialAuth
