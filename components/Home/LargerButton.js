import Link from 'next/link'
import React from 'react'

function LargerButton() {
  return (
    <div className="hidden space-x-4 lg:block space-y-4 lg:col-span-12 mt-12 lg:mt-16 lg:pb-64">
              {/* View on GitHub Button */}
              <Link href="https://github.com/adityakashyap5047/PiTalk" className="inline-flex cursor-pointer items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" target="_blank">
                View on Github
              </Link>
    
              {/* Start Talking Button */}
              <Link href="/forums"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Start Talking</Link>
            </div>
  )
}

export default LargerButton