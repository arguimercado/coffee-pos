"use client"
import React from 'react'
import {useQuery} from "convex/react";
import {api} from "../../../../../convex/_generated/api";
import Spinner from "@/components/spinner";
import ProductCard from "@/app/(root)/(home)/_components/ProductCard";
import {Id} from "../../../../../convex/_generated/dataModel";
import OrderDialog from "@/app/(root)/(home)/_components/OrderDialog";

interface IProps {
  category?: string | undefined
}

const ProductList = ({category}: IProps) => {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<Id<"products"> | null>(null);

  const products = useQuery(api.product.getProducts, {category});

  if(!products) {
    return <Spinner />
  }

  const handleProductClick = (id: Id<"products">) => {
    setSelectedId(id);
    setOpenDialog(!openDialog);
  }

  return (
    <div
      className="w-full grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-4 mt-8 gap-3"
    >
      {products.map((product) => (
        <ProductCard
          key={product._id}
          data={product}
          onCardClick={handleProductClick}
        />
      ))}
      {selectedId && (
        <OrderDialog
          isOpen={openDialog}
          onOpenChange={setOpenDialog}
          id={selectedId}
        />
      )}
    </div>
  )
}
export default ProductList
