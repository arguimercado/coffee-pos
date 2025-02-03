"use client"
import React from 'react'
import {useQuery} from "convex/react";
import {api} from "../../../../../convex/_generated/api";
import {Doc, Id} from "../../../../../convex/_generated/dataModel";
import Image from "next/image";
import Spinner from "@/components/spinner";
import {Delete, Trash} from "lucide-react";
import RemoveOrder from "@/app/(root)/(home)/_components/RemoveOrder";

interface IProps {
  order: Doc<"orders">,
}

const OrderItem = ({order} : IProps) => {

  const product = useQuery(api.product.getProduct,
    {productId: order.productId as Id<"products">});

  if(!product) return <Spinner />

  const totalAmount = order.quantity * order.price;
  return (
    <div className="background-light900_dark200 light-border p-4 rounded-lg">
      <div
        className="flex-between gap-4">
        <div
        className="flex flex-row items-center flex-1 gap-4">
          <Image
            src={`/images/${product.image}`}
            alt={product.title}
            width={50}
            height={100}
            className="object-cover rounded-lg"
          />
          <p>{product.title}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p>x {order.quantity}</p>
          <p>PHP {totalAmount}</p>
        </div>
        <RemoveOrder orderId={ order._id as Id<"orders"> } />
      </div>
    </div>
  )
}
export default OrderItem
