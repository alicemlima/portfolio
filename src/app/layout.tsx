"use client"
import '@/src/styles/globals.css'
import { ThemeProvider } from "next-themes"
import NavBar from '@/src/components/Navbar'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className='font-Poppins bg-light-uranian dark:bg-dark-rich text-dark-black dark:text-dark-almond font-kanit'>
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          {children}
        </ThemeProvider></body>
    </html>
  )
}