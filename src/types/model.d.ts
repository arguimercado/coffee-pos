import {Id} from "../../convex/_generated/dataModel";

interface Product {
  _id: Id<"products">;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}