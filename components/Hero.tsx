"use client";
import Image from "next/image";
import { CustomButton } from "./CustomButton";

export const Hero = () => {
  const handelScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="hero__title">
          Find, book or rend a car -- quickly and easily!
        </h2>

        <p className="hero__subtitle">
          Streamline your car rental experiance with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => handelScroll()}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};
