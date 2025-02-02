
import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {Id} from "../../../../../convex/_generated/dataModel";
import {useMutation, useQuery} from "convex/react";
import {api} from "../../../../../convex/_generated/api";
import Image from "next/image";
import Spinner from "@/components/spinner";
import OrderButton from "@/app/(root)/(home)/_components/OrderButton";

interface IProps {
  isOpen: boolean,
  onOpenChange: (isOpen: boolean) => void,
  id: Id<"products">
}

const OrderDialog = ({isOpen,onOpenChange,id} : IProps) => {

  const product = useQuery(api.product.getProduct, {productId: id});


  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Order</DialogTitle>
        {!product ? <Spinner /> : (
           <div className="w-full flex flex-row gap-4">
             <Image
                src={`/images/${product.image}`}
                alt={product.title}
                width={100}
                height={300}
                className="object-cover  rounded-lg"
             />
             <div className="flex flex-col w-full">
               <p>{product.title}</p>
               <p>{product.description}</p>
               <p className="flex flex-row gap-2">
                 <label>Price {" "}</label>
                 <span>{product.price}</span>
               </p>
               <div className="flex w-full justify-end">
                 <OrderButton productId={product._id} price={product.price} onOrderSuccess={onOpenChange}/>
               </div>
             </div>
           </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
export default OrderDialog
