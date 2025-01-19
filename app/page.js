import React from "react";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import Main from "@/components/Main";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}

      <section className="bg-white dark:bg-gray-800">
        <Main/>
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
      <AboutUs/>
    </div>
  );
};

export default Homepage;