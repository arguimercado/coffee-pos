"use client";
import React from 'react'
import Theme from "@/components/Theme.";
import {SignedIn, UserButton, RedirectToSignIn, SignedOut} from "@clerk/nextjs";


const Navbar = () => {


  return (
    <div
        className="background-light900_dark200 fixed
                  z-50 w-full min-w-[84px] gap-5  shadow-light-400 dark:shadow-none">
      <div className="flex-between lg:max-w-7xl m-auto w-full py-4 px-4 lg:px-0">
        <div>Coffee POS</div>
        <div className="flex flex-row gap-4 items-center">
          <Theme />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </div>
      </div>
    </div>
  )
}
export default Navbar
