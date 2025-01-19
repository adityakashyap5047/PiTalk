"use client";

import React from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
// import { useUser } from '@clerk/nextjs'

const Navbar = () => {
    // const user = useUser();
    // console.log(user.user?.id);
  return (
    <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">PiTalk</Link>
            <ul className="flex space-x-4 items-center">
                <li>
                    <Link href="/" className="hover:text-gray-200">Home</Link>
                </li>
                <li>
                    <Link href="/forums" className="hover:text-gray-200">Forums</Link>
                </li>
                <li className='flex justify-center items-center'>
                    <UserButton/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar