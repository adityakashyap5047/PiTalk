import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}

      <section className="bg-white dark:bg-gray-800">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              PiTalk - Talk with your buddies!  
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcom to PiTalk, the fun and easy way to connect with your friends. Stay in touch, share stories and laughs, and create lasting memories - all in one place.
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="" target="_blank" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"></svg>
                View on Github
              </a>
              <a href="" target="_blank" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg className="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500"></svg>
                Start Talking
              </a>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20 px-20">
        <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">Key Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="p-6 bg-white rounded-lg shadow-md flex justify-center flex-col items-center">
          <svg className="w-10 h-10 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>
            <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
            <p>Enjoy instant messaging with friends and family.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex justify-center flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
            <p className="w-10 h-10 text-green-500 mb-4">Create and join group chats with your loved ones.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex justify-center flex-col items-center">
            <img style={{color: "yellow"}} className="w-10 h-10 text-yellow-500 mb-4" src="https://cdn4.iconfinder.com/data/icons/folders-56/64/x-04-1024.png" alt="file sharing icon" />
            <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
            <p>Easily share photos, videos, and documents.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage