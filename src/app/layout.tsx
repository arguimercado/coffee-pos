import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";


import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = localFont({
   src: "./fonts/InterVF.ttf",
   variable: "--font-inter",
   weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
   title: "Cofee POS",
   description: "Point Of Sale App for Coffee Shops",
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const session = await auth();

   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${inter.variable}  antialiased`}>
            <SessionProvider session={session}>
              <ThemeProvider
                attribute={"class"}
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
              </SessionProvider>
        
         </body>
      </html>
   );
}
