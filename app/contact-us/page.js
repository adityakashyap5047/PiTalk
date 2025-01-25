import React from 'react'
import ContactUs from './ContactUs'

function page() {
  return (
    <div className='h-full'>
      <h1 className="text-3xl font-bold text-[#8ec0e8] mb-6">Need Assistance? Contact Us Today!</h1>
      <ContactUs/>     
    </div>
  )
}

export default page

export const metadata = {
    title: 'Contact Us - PiTalk',
    description: 'Have questions or feedback? Feel free to reach out to us.',
};