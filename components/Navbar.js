"use client";

import React from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-black p-4 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">PiTalk</Link>
            <ul className="flex space-x-4 items-center">
                <li>
                    <ModeToggle/>
                </li>
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