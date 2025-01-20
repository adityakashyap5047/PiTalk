import Image from 'next/image'
import React from 'react'
import Icon3DCloud from './Icon3DCloud'

function RightSection() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-start items-center sm:w-full sm:mt-8 lg:mt-0">
        <Image
          src="https://demo.themesberg.com/landwind/images/hero.png"
          width={600}
          height={400}
          alt="hero image"
          className="w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
        <Icon3DCloud/>
      </div>
  )
}

export default RightSection