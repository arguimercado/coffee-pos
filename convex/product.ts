import {query} from "./_generated/server";
import {v} from "convex/values";

export const getProducts = query({
  args: {
    category: v.optional(v.string())
  },
  handler: async (ctx,{category}) => {

    const products = await ctx.db
        .query("products")
        .filter((q) => q.eq(q.field("isActive"),true))
        .filter((q) => q.eq(q.field("category"),category))
        .collect();
    return products;
  }
})

export const getProduct = query({
  args: {
    productId: v.id("products")
  },
  handler: async (ctx,{productId}) => {
    return  await ctx.db.get(productId);
  }
})