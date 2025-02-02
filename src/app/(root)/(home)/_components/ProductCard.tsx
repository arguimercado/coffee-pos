"use client"
import React from 'react'
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Doc, Id} from "../../../../../convex/_generated/dataModel";

interface ProductProps {
  data: Doc<"products">,
  onCardClick?: (id: Id<"products">) => void
}
const ProductCard = ({data,onCardClick}: ProductProps) => {

  return (
    <Card
        className="flex w-full items-center flex-col  cursor-pointer overflow-hidden"
        onClick={() => onCardClick && onCardClick(data._id)}
    >

      <Image
        src={`/images/${data.image}`}
        alt={data.title}
        width={100}
        height={400}
        className="object-fill w-full "/>
      <div className="w-full px-4 py-2">
        <p className="text-base ">{data.title}</p>
        <p className="flex-between w-full">
          <span>Price:</span>
          <span>{data.price} Pesos</span></p>
      </div>
    </Card>
  )
}
export default ProductCard
