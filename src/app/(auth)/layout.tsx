import React, { ReactNode } from 'react'

const AuthLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark'>
      <section className='light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8'>
         <div className='flex-between  gap-2'>
            <div className='space-y-2.5 w-full flex justify-center'>
            <p className="h2-bold  text-dark-100 dark:text-light-900 max-sm:hidden ">
              Coffee <span className="text-primary-500">POS</span>
            </p>
            </div>
         </div>
         {children}
      </section>
    </main>
  )
}

export default AuthLayout