"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
const Hero = () => {
  return (
    <div className="pt-44 md:px-24 sm:px-3 relative lg:justify-between lg:flex-row flex md:justify-center flex-col lg:text-left text-center ">
      <div className="lg:w-6/12 w-full ">
        <h1 className=" lg:text-6xl md:text-5xl sm:text-3xl text-3xl flex flex-col bg-gradient-to-r text-transparent bg-clip-text from-white to-blue-600 lg:text-left text-center ">
          Hello, World!
          <span className="border-gradient-to-r from-white to-blue-600 text-">
            Hello, World! I am a hero.
          </span>
        </h1>
        <p className="text-gray-600 py-3">
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a
        </p>
        <CustomButton title="Contact Us" />
      </div>
      <div className="lg:w-6/12 bg-blue-300 h-80 w-full"></div>
    </div>
  );
};

export default Hero;
