"use client";

import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';

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
                    <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
                </li>
                <li>
                    <a href="/forums" className="text-gray-400 hover:text-white transition">Forums</a>
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