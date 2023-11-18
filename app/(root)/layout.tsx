import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'

import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/Leftsidebar'
import RightSideBar from '@/components/shared/Rightsidebar'
import Bottombar from '@/components/shared/Bottombar'

export const metadata = {
  tilt: 'Threads',
  description: 'A next.js 13 Meta Threads Application'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        <Topbar/>

        <main>
          <LeftSidebar/>

        <section className="main-dontainer">
          <div className="w-full max-w-4xl">
            {children}
          </div>
        </section>

          <RightSideBar/>
        </main>
        
        <Bottombar/>
        </body>
    </html>
    </ClerkProvider>
  )
}
