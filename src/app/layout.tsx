import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import "./globals.css"
import Footer from "./_components/ui/footer"
import { Toaster } from "./_components/ui/sonner"
import AuthProvider from "./_components/ui/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
