"use client";
import React from 'react'
import {ShoppingCartIcon} from "lucide-react";
import {Id} from "../../../../../convex/_generated/dataModel";



const OrderTab = () => {


  return (
    <div className="w-full flex flex-col h-[880px] px-4 py-2">
      <div className="light-border w-full">
        <div className="flex item-centers gap-2 background-light800_dark200 w-full px-2 py-3 rounded-lg">
          <ShoppingCartIcon className="w-5 h-5" />
          <p className="paragraph-medium">ORDER SUMMARY</p>

        </div>
      </div>
    </div>
  )
}
export default OrderTab
