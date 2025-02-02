"use client";
import React, {useEffect} from 'react'
import {useUser} from "@clerk/nextjs";
import {useMutation} from "convex/react";
import {api} from "../../convex/_generated/api";

const ConvexSyncUser = () => {

  const {user,isSignedIn} = useUser();


  const updateUser = useMutation(api.users.updateUser);

  useEffect(() => {
    console.log(user?.id);
    const syncUser = async () => {
      try {
        await updateUser({
          userId: user?.id ?? "",
          name: `${user?.firstName} ${user?.lastName}`.trim(),
          email: user?.emailAddresses[0].emailAddress ?? ""
        });
      }
      catch (error) {
        console.error(error);
      }
    }
    if(isSignedIn) syncUser();
  }, [user]);

  return (
    <div></div>
  )
}
export default ConvexSyncUser
