import LeftSection from "./Home/LeftSection";
import RightSection from "./Home/RightSection";
import ShorterButton from "./Home/ShorterButton";

const Main = () => {

  return (
    <div className="max-w-screen-xl pt-10 lg:pt-10 px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid lg:grid-cols-12 min-h-[calc(100vh-64px)]">
      {/* Left Content (Text) */}
      <LeftSection/>

      {/* Right Image */}
      <RightSection/>

      {/* Buttons Section (Always below image) */}
      <ShorterButton/>
    </div>
  );
};

export default Main;
