"use client"
import React from 'react'
import {Id} from "../../../../../convex/_generated/dataModel";
import {useMutation} from "convex/react";
import {api} from "../../../../../convex/_generated/api";
import {Button} from "@/components/ui/button";
import {useUser} from "@clerk/nextjs";
import {toast} from "@/hooks/use-toast";

interface IProps {
  productId: Id<"products">,
  price: number,
  onOrderSuccess?: (open: boolean) => void
}
const OrderButton = ({productId,price,onOrderSuccess} : IProps) => {

  const {user} = useUser();
  const addOrder = useMutation(api.order.addOrder);
  const [loading,setLoading] = React.useState(false);

  const handleOrder = async (productId: Id<"products">) => {
    try {
      setLoading(true);
      await addOrder({
        productId: productId,
        quantity: 1,
        userId: user?.id ?? "",
        price: price
      });
      toast({
        title: "Order placed",
        description: "Your order has been placed successfully",
        variant: "default"
      });

      if(onOrderSuccess)
        onOrderSuccess(false);
    }catch (exception) {
      console.error(exception);
      toast({
        title: "Order failed",
        description: "There was an error placing your order",
        variant: "destructive"
      })
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <Button variant={"theme"}
            onClick={() => handleOrder(productId)}
    >Order</Button>
  )
}
export default OrderButton
