import {mutation, query} from "./_generated/server";
import {v} from "convex/values";

export const addOrder = mutation({
  args: {
    userId: v.string(),
    productId: v.string(),
    quantity: v.number(),
    price: v.number(),
  },
  handler: async (ctx,{userId,productId,quantity,price}) => {
    return await ctx.db.insert("orders",{
      userId,
      productId,
      quantity,
      price,
      orderDate: new Date().getTime()
    });
  }
});

export const getOrders = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("orders").collect();
  }
})