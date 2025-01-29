import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Main from "@/components/Main";
import AboutUs from "@/components/AboutUs";
import KeyFeatures from "@/components/KeyFeatures";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      {/* Hero section */}

      <section className="bg-white dark:bg-gray-800">
        <BackgroundGradientAnimation className="bg-gradient-linear animate-bg-gradient dark:from-[#121212] dark:via-[#080F58] dark:to-[#121212]">
          <Main/>
        </BackgroundGradientAnimation>
      </section>

      {/* Features Section */}
        <KeyFeatures/>
        <AboutUs/>
    </div>
  );
};

export default Homepage;

export const metadata = {
  title: 'Home - PiTalk',
  description: "Explore the world of discussion on recent technologies"
}