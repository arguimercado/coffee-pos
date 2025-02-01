import { z } from "zod";

export const SignInSchema = z.object({
   email: z
     .string()
     .min(1, { message: "Please enter email address" })
     .email({ message: "Please enter a valid email address" }),
   password: z
     .string()
     .min(6, { message: "Password must be at least 6 characters" })
     .max(50, { message: "Password must be at most 50 characters" }),
 });