import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const topics = [
    {   
        text: "Python",
        img: "/python-logo.png",
        desc: "Lets discuss everything related to Python",
        slug: "Python"
    },
    {
        text: "JavaScript",
        img: "/js-logo.png",
        desc: "Learn and share JavaScript knowledge",
        slug: "Js"
    },
    {
        text: "React",
        img: "/react-logo.png",
        desc: "Build amazing user interface with React",
        slug: "React"
    },
    {
        text: "CSS",
        img: "/css-logo.png",
        desc: "Explore the world of designing and CSS",
        slug: "Css"
    },
    {
        text: "Web Development",
        img: "/html-logo.png",
        desc: "Discuss front-end, back-end, and full-stack web development.",
        slug: "Web"
    }
];

const Forums = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-64px)] bg-gradient-linear from-[#080F58] via-purple-500 to-[#080F58] bg-[length:200%_200%] animate-bg-gradient">
        <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center ">Discussion Forums</h3>

        <div className="flex flex-wrap justify-center">
            {topics.map((topic) => {
                return <div key={topic.img} className='shadow-lg bg-sky-200 lg:w-1/4 m-4 flex justify-center flex-col items-center py-10 rounded-xl gap-4'>
                    <Image alt="a" src={topic.img} width={74} height={74}/>
                    <h2 className="text-2xl">{topic.text}</h2>
                    <p className="px-3">{topic.desc}</p>
                    <Link href={`/forum/${topic.slug}`}>
                        <Button className='px-4 border bg-cyan-600 border-slate-300 py-2 hover:bg-blue-600'>Discuss now</Button>
                    </Link>
                </div>
            })}
        </div>
    </div>
  )
}

export default Forums

export const metadata = {
    title: 'Forums - PiTalk',
    description: "Let's start talking with any one of the technologies"
}