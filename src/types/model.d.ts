import {Id} from "../../convex/_generated/dataModel";

interface Product {
  _id: Id<"products">;
  title: string;
  description?: string | undefined;
  price: number;
  category: string;
  image: string;
  _creationTime: number;
  isActive: boolean;
}

interface Payment {
  customerName: string;
  paymentType: "cash" | "credit",
  totalPurchase: number;
  amount: number;
}