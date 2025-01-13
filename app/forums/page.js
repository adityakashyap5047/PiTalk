import React from 'react'
import Image from 'next/image'

const topics = [
    {   
        text: "Python",
        img: "/python.webp",
        desc: "Lets discuss everything related to Python"
    },
    {
        text: "JavaScript",
        img: "/js.webp",
        desc: "Learn and share JavaScript knowledge"
    },
    {
        text: "React",
        img: "/reactjs.webp",
        desc: "Build amazing user interface with React"
    },
    {
        text: "CSS",
        img: "/css.webp",
        desc: "Explore the world of designing and CSS"
    },
    {
        text: "Web Development",
        img: "/html.webp",
        desc: "Discuss front-end, back-end, and full-stack web development."
    }
];

const Forums = () => {
  return (
    <div className="container mx-auto my-28">
        <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">Discussion Forums</h3>

        <div className="flex flex-wrap justify-center">
            {topics.map((topic) => {
                return <div key={topic.img} className='shadow-lg bg-sky-200 w-1/4 m-4 flex justify-center flex-col items-center py-10 rounded-xl gap-4'>
                    <Image alt="a" src={topic.img} width={74} height={74}/>
                    <h2 className="text-2xl">{topic.text}</h2>
                    <p className="px-3">{topic.desc}</p>
                    <button className='px-4 border border-slate-300 py-2'>Discuss now</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Forums