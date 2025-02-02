import React from 'react'
import NavLink from "@/app/(root)/_components/NavLink";

const Sidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar">
      <div
        className="light-border custom-scrollbar
        sticky left-0 top-0 flex h-screen flex-1 flex-col justify-between
        gap-6 overflow-y-auto border-r p-6 pt-28 shadow-light-400
        dark:shadow-none max-sm:hidden lg:w-[120px] z-0">
          <div className="flex flex-1 flex-col gap-6">
            <NavLink isMobileNav={false} />
          </div>
      </div>
    </section>
  )
}
export default Sidebar
