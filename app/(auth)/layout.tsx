import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter } from 'next/font/google';

export const metadata = {
    tilt: 'Threads',
    description: 'A next.js 13 Meta Threads Application'
}

const inter = Inter ({ subsets: ["latin"] })

export default function RootLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
     return  (
     <ClerkProvider>
        <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
        </html>

     </ClerkProvider>
     )
}