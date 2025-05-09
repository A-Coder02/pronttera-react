import React from "react";

import DiscrodSvg from "../../assets/images/discord.svg";
import FacebookSvg from "../../assets/images/facebook.svg";

const Footer = () => {
  return (
    <section>
      <footer className="flex flex-col md:flex-row gap-20 justify-between border-t border-t-black pt-16">
        <div className="max-w-[22.5rem]">
          <h2 className="font-semibold text-3xl mb-10">Let’s work together</h2>
          <p className="mb-14">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex gap-4">
            <img src={DiscrodSvg} className="w-9 h-9 cursor-pointer" alt="" />
            <img src={FacebookSvg} className="w-9 h-9 cursor-pointer" alt="" />
          </div>
        </div>
        <div className="max-w-[530px]">
          <form className="flex flex-col gap-5 ">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
            />
            <textarea
              name=""
              placeholder="Type your message here"
              rows={8}
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
              id=""
            ></textarea>
            <button
              type="submit"
              className="self-start p-6 w-96 self-start bg-black text-white cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
