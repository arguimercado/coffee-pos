"use client"
import React from 'react'
import {useQuery} from "convex/react";
import {api} from "../../../../../convex/_generated/api";
import Spinner from "@/components/spinner";
import ProductCard from "@/components/ProductCard";

interface IProps {
  category?: string | undefined
}

const ProductList = ({category}: IProps) => {

  const products = useQuery(api.product.getProducts, {category});
  console.log(products);
  if(!products) {
    return <Spinner />
  }

  return (
    <div
      className="w-full grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-4 mt-8 gap-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
        />
      ))}
    </div>
  )
}
export default ProductList
