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
  users: defineTable({
    name: v.string(),
    email: v.string(),
    userId: v.optional(v.string()),
    stripeConnectId: v.optional(v.string()),
  })
    .index("by_user_id", ["userId"])
    .index("by_email", ["email"]),
})
