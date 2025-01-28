import React from 'react'
import ContactUs from './ContactUs'

function page() {
  return (
    <div className='h-full bg-gradient-linear from-[#080F58] via-purple-500 to-[#080F58] bg-[length:200%_200%] animate-bg-gradient'>
      <ContactUs/>     
    </div>
  )
}

export default page

export const metadata = {
    title: 'Contact Us - PiTalk',
    description: 'Have questions or feedback? Feel free to reach out to us.',
};