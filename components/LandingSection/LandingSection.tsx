"use client";
import Image from "next/image";
import { Button } from "../Button/button";
import useBreakpoint from "@/hooks/useBreakpoint";

export const LandingSection = () => {
  const { isTabletOrMobile } = useBreakpoint();
  return (
    <div className="bg-background flex-grow md:mx-8 md:p-16 p-8 flex justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-black">
          Stop Trademark Infringements. <br /> Effortlessly.
        </h1>
        <div className="pb-20">
          <h2 className="text-2xl">
            Discover the power of AI-driven solutions for all your Intellectual
            needs
          </h2>
          <p></p>
        </div>
        <div className="">
          <Button text="Request Demo" secondaryText="Contact Us" />
        </div>
      </div>
      <div className="self-center">
        <Image
          width={500}
          height={500}
          alt="brandVectorArt"
          src="/law_vector_art.svg"
        />
      </div>
    </div>
  );
};
