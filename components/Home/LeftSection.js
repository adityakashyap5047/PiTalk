import React from 'react'
import LargerButton from './LargerButton'
import { AnimatedTestimonialsDemo } from './AnimatedCards'

function LeftSection() {
  return (
    <div className="lg:col-span-7 mr-auto place-self-center lg:mt-0">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight mb-8 md:text-5xl xl:text-6xl text-[#49b8af] dark:text-white">
          PiTalk - Talk with your buddies!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-light mb-6 lg:text-xl md:text-lg lg:mb-8 max-w-2xl">
          Welcome to PiTalk, the fun and easy way to connect with your friends.
          Stay in touch, share stories and laughs, and create lasting memories - 
          all in one place.
        </p>
        <div className="hidden lg:block">
          <AnimatedTestimonialsDemo/>
        </div>

        {/* Button Section on Larger Screens */}
        <LargerButton/>
      </div>
  )
}

export default LeftSection