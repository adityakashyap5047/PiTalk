import Image from "next/image";

const Main = () => {
  return (
    <div className="max-w-screen-xl mt-10 lg:mt-10 px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid lg:grid-cols-12 min-h-[calc(100vh-64px)]">
      {/* Left Content (Text) */}
      <div className="lg:col-span-7 mr-auto place-self-center lg:mt-0">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight mb-8 md:text-5xl xl:text-6xl dark:text-white">
          PiTalk - Talk with your buddies!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-light mb-6 lg:text-xl md:text-lg lg:mb-8 max-w-2xl">
          Welcome to PiTalk, the fun and easy way to connect with your friends.
          Stay in touch, share stories and laughs, and create lasting memories - 
          all in one place.
        </p>

        {/* Button Section on Larger Screens */}
        <div className="hidden space-x-4 lg:block space-y-4 lg:col-span-12 mt-12 lg:mt-16">
          {/* View on GitHub Button */}
          <a
            href=""
            target="_blank"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            View on GitHub
          </a>

          {/* Start Talking Button */}
          <a
            href=""
            target="_blank"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Start Talking
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:col-span-5 flex justify-center items-center sm:w-full sm:mt-8">
        <Image
          src="https://demo.themesberg.com/landwind/images/hero.png"
          width={600}
          height={400}
          alt="hero image"
          className="w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
      </div>

      {/* Buttons Section (Always below image) */}
      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center lg:col-span-12 mt-8 lg:mt-0 lg:hidden">
        {/* View on GitHub Button */}
        <a
          href=""
          target="_blank"
          className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          View on GitHub
        </a>

        {/* Start Talking Button */}
        <a
          href=""
          target="_blank"
          className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Start Talking
        </a>
      </div>
    </div>
  );
};

export default Main;
