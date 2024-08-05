import React from "react";
import HomeIntro from "./Home/HomeIntro";
import FadeMarquee from "./Home/FadeMarquee";

const Home = () => {
  return (
    <div className="max-w-[1480px] mx-auto px-10">
      <HomeIntro />
      <FadeMarquee />
    </div>
  );
};

export default Home;
