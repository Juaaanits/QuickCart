'use client'
import Navbar from '@/components/seller/Navbar'
import Sidebar from '@/components/seller/Sidebar'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default Layout