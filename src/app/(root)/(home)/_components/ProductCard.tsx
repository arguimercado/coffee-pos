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
        className="flex w-full items-center flex-col px-4 py-4 cursor-pointer"
        onClick={() => onCardClick && onCardClick(data._id)}
    >
      <Image
        src={`/images/${data.image}`}
        alt={data.title}
        width={100}
        height={400}
        className="object-cover w-full  rounded-lg"/>
      <p className="p-4 text-base ">{data.title}</p>
      <p>Price: {data.price} Pesos</p>
    </Card>
  )
}
export default ProductCard
