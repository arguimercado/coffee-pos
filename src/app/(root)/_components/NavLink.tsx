"use client"
import React from 'react'
import {usePathname} from "next/navigation";
import {sidebarLinks} from "@/data/menu";
import Link from "next/link";

const NavLink = ({isMobileNav} : {isMobileNav:boolean}) => {
  const currentPath = usePathname();


  return (
    <>
      {sidebarLinks.map((link, index) => {
        const isActive = (currentPath.includes(link.route) && link.route.length > 1)
        || currentPath === link.route;
        return (
          <Link
            key={index}
            href={link.route}
            className="flex flex-col items-center">
              <link.icon className="w-6 h-6" />
              <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-gray-400"}`}>
                {link.label}</span>
          </Link>
        )
      })}
    </>
  )
}
export default NavLink
