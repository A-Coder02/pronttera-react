import React from "react";

import HeroImage from "../../assets/images/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="flex gap-7 justify-center items-center">
      <div className="flex-1 max-w-[34rem] hero-content flex flex-col gap-10">
        <p className="title text-xl font-semibold">Branding | Image making </p>
        <h1 className="font-semibold text-[5rem] leading-[5rem]">
          My awesome portfolio
        </h1>
        <p className="lead">And I made it myself! Yes. In Figma with Anima</p>
      </div>
      <div className="hero-img">
        <img src={HeroImage} alt="Hero Image" className="w-[30rem]" />
      </div>
    </section>
  );
};

export default HeroSection;

// 80 / 16 => 5
