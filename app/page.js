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
              Welcom to PiTalk, the fun and easy way to connect with your
              friends. Stay in touch, share stories and laughs, and create
              lasting memories - all in one place.
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href=""
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-200"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                ></svg>
                View on Github
              </a>
              <a
                href=""
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 300"
                  width="1667"
                  height="2500"
                ></svg>
                Start Talking
              </a>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="https://demo.themesberg.com/landwind/images/hero.png"
              width={453}
              height={354}
              alt="hero image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-20 px-20">
        <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">
          Key Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="p-6 bg-white rounded-lg shadow-md flex justify-center flex-col items-center">
            <svg
              className="w-10 h-10 text-blue-500 fill-current mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
            <p>Enjoy instant messaging with friends and family.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex justify-center flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-green-500 fill-current"
            >
              <path d="M12 3C7.03 3 3 6.58 3 11c0 1.77.77 3.42 2.02 4.73-.1.75-.36 2.02-1.45 3.12a1 1 0 00.8 1.7c2.4-.3 4.15-1.18 5.18-1.82.79.2 1.62.27 2.45.27 4.97 0 9-3.58 9-8s-4.03-8-9-8zm-4 8a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm8.02 9.1c-.87.92-2.24 1.9-4.05 2.23a1 1 0 01-.8-1.7c1.1-1.1 1.35-2.37 1.45-3.12 1.25-1.31 2.02-2.96 2.02-4.73 0-.66-.08-1.3-.24-1.91a1 1 0 111.94-.46c.21.87.3 1.77.3 2.37 0 2.42-.97 4.66-2.62 6.32z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
            <p>Create and join group chats with your loved ones.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex justify-center flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-yellow-500 fill-current"
            >
              <path d="M10 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-8h-6a2 2 0 01-2-2V3zm5.5 5H20l-5-5v3.5a1.5 1.5 0 001.5 1.5zM13 12a1 1 0 011-1h4a1 1 0 010 2h-2.586l2.293 2.293a1 1 0 01-1.414 1.414L14 14.414V17a1 1 0 01-2 0v-4z" />
            </svg>

            <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
            <p>Easily share photos, videos, and documents.</p>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      
      <section className="container mx-auto py-20 px-8 sm:px-16">
  <h3 className="text-3xl sm:text-5xl font-semibold text-center mb-12">
    Pay once, use forever
  </h3>

  {/* Card Grid */}
  <div className="grid grid-cols-1 px-6 sm:grid-cols-2 text-center mx-auto lg:grid-cols-3 gap-8 max-w-4xl">
    {/* Standard Plan */}
    <div className="flex flex-col rounded-xl shadow-lg bg-white p-6 hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-gray-900">Standard</h3>
      <p className="mt-2 text-sm text-gray-500">1 license for only 1 activation</p>
      <div className="mt-4 flex justify-center items-baseline space-x-2">
        <p className="text-lg text-gray-500 line-through">$39</p>
        <p className="text-4xl font-extrabold text-gray-900">$29</p>
      </div>
      <button
        className="mt-6 w-full border border-blue-500 text-blue-500 text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors"
      >
        Buy now
      </button>
      <ul className="mt-6 space-y-4 text-sm text-gray-600">
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">Lifetime access</span>
        </li>
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">All AI features</span>
        </li>
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">Use your own OpenAI key</span>
        </li>
      </ul>
    </div>

    {/* Extended Plan */}
    <div className="flex flex-col rounded-xl shadow-lg bg-white p-6 border-2 border-blue-500 hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-gray-900">Extended</h3>
      <p className="mt-2 text-sm text-gray-500">1 license for up to 3 activations</p>
      <div className="mt-4 flex justify-center items-baseline space-x-2">
        <p className="text-lg text-gray-500 line-through">$59</p>
        <p className="text-4xl font-extrabold text-gray-900">$39</p>
      </div>
      <button
        className="mt-6 w-full bg-blue-500 text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Buy now
      </button>
      <ul className="mt-6 space-y-4 text-sm text-gray-600">
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">Lifetime access</span>
        </li>
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">All AI features</span>
        </li>
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">Use your own OpenAI key</span>
        </li>
      </ul>
    </div>

    {/* Premium Plan */}
    <div className="flex flex-col rounded-xl shadow-lg bg-white p-6 hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
      <p className="mt-2 text-sm text-gray-500">1 license for up to 5 activations</p>
      <div className="mt-4 flex justify-center items-baseline space-x-2">
        <p className="text-lg text-gray-500 line-through">$79</p>
        <p className="text-4xl font-extrabold text-gray-900">$49</p>
      </div>
      <button
        className="mt-6 w-full border border-blue-500 text-blue-500 text-lg font-medium py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors"
      >
        Buy now
      </button>
      <ul className="mt-6 space-y-4 text-sm text-gray-600">
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">Lifetime access</span>
        </li>
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">All AI features</span>
        </li>
        <li className="flex items-center">
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 6.293a1 1 0 00-1.414-1.414L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
            </svg>
          </span>
          <span className="ml-3">Use your own OpenAI key</span>
        </li>
      </ul>
    </div>
  </div>
</section>
    </div>
  );
};

export default Homepage;