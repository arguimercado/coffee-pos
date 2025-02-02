import React, { ReactNode } from 'react'
import Navbar from "@/app/(root)/_components/Navbar";
import Sidebar from "@/app/(root)/_components/Sidebar";

const RootLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className='background-light850_dark100 relative'>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <section className="flex min-h-screen w-full flex-col px-6 lg:mr-[120px] pt-28 max-md:px-4 sm:px-4">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </section>

      </main>
    </div>
  )
}

export default RootLayout