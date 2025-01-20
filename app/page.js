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
        <BackgroundGradientAnimation>
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