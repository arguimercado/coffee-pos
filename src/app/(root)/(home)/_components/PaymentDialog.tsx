import React from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

interface IProps {
  isOpen: boolean,
  onOpenChange: (isOpen: boolean) => void,
}

const PaymentDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <Button variant="theme" className="w-full">Place Order</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
        </DialogHeader>
        <div>

        </div>
      </DialogContent>
    </Dialog>
  )
}
export default PaymentDialog
