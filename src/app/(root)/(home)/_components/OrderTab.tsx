"use client";
import React from 'react'
import {ShoppingCartIcon} from "lucide-react";
import {Id} from "../../../../../convex/_generated/dataModel";
import {useQuery} from "convex/react";
import {api} from "../../../../../convex/_generated/api";
import OrderItem from "@/app/(root)/(home)/_components/OrderItem";
import Spinner from "@/components/spinner";
import {Button} from "@/components/ui/button";



const OrderTab = () => {
  const orders = useQuery(api.order.getOrders);

  if(!orders) return <Spinner />

  const sumOfOrderAmount = orders.reduce((acc, order) => acc + order.quantity * order.price, 0);

  return (
    <div className="w-full flex flex-col h-[880px] px-4 py-2">
      <div className="light-border w-full">
        <div className="flex item-centers gap-2 background-light800_dark200 w-full px-2 py-3 rounded-lg">
          <ShoppingCartIcon className="w-5 h-5" />
          <p className="paragraph-medium">ORDER SUMMARY</p>

        </div>
        <div className="flex flex-col py-4 h-[500px] overflow-y-auto custom-scrollbar">
          {(orders && orders.length > 0) ? (
            <>
              {orders.map((order) => (
                <div key={order._id} className="mt-4">
                  <OrderItem  order={order}/>
                </div>
              ))}
            </>
          ) :
          (
            <div className="flex w-full justify-center px-4">
              <p className="paragraph-medium">No Orders</p>
            </div>
          )}
        </div>
        <div className="flex-between py-4">
          <p className="text-2xl font-bold">Total</p>
          <span className="text-primary-500 font-bold text-2xl">{sumOfOrderAmount}</span>
        </div>
        {orders && orders.length > 0 && (
          <div className="flex-between gap-3">
            <Button variant="theme" className="w-full">Order</Button>

          </div>
        )}
      </div>
    </div>
  )
}
export default OrderTab
