import {defineSchema,defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
  products: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    image: v.string(),
    category: v.string(),
    price: v.number(),
    isActive: v.boolean(),
  }),
  orders: defineTable({
    userId: v.string(),
    productId: v.string(),
    quantity: v.number(),
    price: v.number(),
    orderDate: v.number()
  })
    .index("by_user_id", ["userId"])
    .index("by_product_id", ["productId"]),

  users: defineTable({
    name: v.string(),
    email: v.string(),
    userId: v.optional(v.string()),
    stripeConnectId: v.optional(v.string()),
  })
    .index("by_user_id", ["userId"])
    .index("by_email", ["email"]),
})
