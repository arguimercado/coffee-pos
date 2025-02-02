"use client"
import React from 'react'
import {Trash} from "lucide-react";
import {useMutation} from "convex/react";
import {api} from "../../../../../convex/_generated/api";
import {Id} from "../../../../../convex/_generated/dataModel";

const RemoveOrder = ({orderId} : {orderId: Id<"orders">}) => {

  const removeOrder = useMutation(api.order.removeOrder);


  async function handleRemoveOrder(orderId: Id<"orders">) {
    await removeOrder({orderId})
  }

  return (
    <Trash
      onClick={() => handleRemoveOrder(orderId)}
        className="w-5 h-5 cursor-pointer"
    />
  )
}
export default RemoveOrder
