"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const topics = [
  {
    text: "Python",
    img: "/python-logo.png",
    desc: "Lets discuss everything related to Python",
    slug: "Python",
  },
  {
    text: "JavaScript",
    img: "/js-logo.png",
    desc: "Learn and share JavaScript knowledge",
    slug: "Js",
  },
  {
    text: "React",
    img: "/react-logo.png",
    desc: "Build amazing user interface with React",
    slug: "React",
  },
  {
    text: "CSS",
    img: "/css-logo.png",
    desc: "Explore the world of designing and CSS",
    slug: "Css",
  },
  {
    text: "Web Development",
    img: "/html-logo.png",
    desc: "Discuss front-end, back-end, and full-stack web development.",
    slug: "Web",
  },
];

const Forums = () => {
  const router = useRouter();
  const [loadingStates, setLoadingStates] = useState({});

  const handleDiscussClick = (slug) => {
    setLoadingStates((prev) => ({ ...prev, [slug]: true }));
    router.push(`/forum/${slug}`);
};

  // Reset isLoading when navigation completes
  useEffect(() => {
    const handleRouteChange = () => setLoadingStates({});

    router.events?.on("routeChangeComplete", handleRouteChange);
    router.events?.on("routeChangeError", handleRouteChange);

    return () => {
      router.events?.off("routeChangeComplete", handleRouteChange);
      router.events?.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-linear from-[#080F58] via-purple-500 to-[#080F58] bg-[length:200%_200%] animate-bg-gradient dark:from-[#121212] dark:via-[#080F58] dark:to-[#121212]">
      <h3 className="text-4xl sm:text-5xl py-5 text-[#0E0E5C] dark:text-[#4441d5] font-semibold gap-2 text-center">
        Discussion Forums
      </h3>
      <div className="flex flex-wrap justify-center">
        {topics.map((topic) => {
          return (
            <div
              key={topic.img}
              className="shadow-lg bg-sky-700 lg:w-1/4 m-4 flex justify-center flex-col items-center py-10 rounded-xl gap-4 dark:bg-[#23224f]"
            >
            <Image alt="a" src={topic.img} width={74} height={74} />
            <h2 className="text-2xl">{topic.text}</h2>
            <p className="px-3">{topic.desc}</p>
            <Button 
                className="px-4 border bg-cyan-600 border-slate-300 py-2 hover:bg-blue-600"
                onClick={() => handleDiscussClick(topic.slug)}
                disabled={loadingStates[topic.slug]}
            >
                {loadingStates[topic.slug] ? <><Loader2 className='mr-2 h-4 w-4 animate-spin text-[#0E0E5C]'/> Please wait... </> : 'Discuss now'}
            </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forums;

// export const metadata = {
//     title: 'Forums - PiTalk',
//     description: "Let's start talking with any one of the technologies"
// }
