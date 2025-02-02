import {Home, LucideIcon, UsersIcon} from "lucide-react";

export const sidebarLinks : {
  route: string,
  icon: LucideIcon,
  label:string }[] = [
  {
    route: "/",
    icon: Home,
    label: "Home",
  },
  {
    icon: UsersIcon,
    route: "/customers",
    label: "Customer",
  },

];
