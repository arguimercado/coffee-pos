import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

import {Toaster} from "@/components/ui/toaster";
import {ClerkProvider} from "@clerk/nextjs";

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



  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}  antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            {children}
            <Toaster />
          </ClerkProvider>
        </ThemeProvider>
      </body>

    </html>
  );
}
