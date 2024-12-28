
import React from "react";
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


async function Hero() {
  const res = await client.fetch(`
    *[_type=='landingPage'][].sections[0]{
      mainHeading,btnText,para1,
      'heroImage':heroImage.asset->url
    }
  `);

  return (
    <section className="relative">
      {/* Hero Background */}
      <div
        style={{ backgroundImage: `url(${res[0].heroImage})` }}
        className="bg-cover bg-center h-[80vh] sm:h-[90vh] flex items-center justify-center"
       

      ></div>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 xsm:px-6 sm:px-8 md:px-12">


        <h1 className="text-2xl xsm:text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug font-bold text-white">
          {res[0].mainHeading}
        </h1>


        
        <p className="text-base xsm:text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium mt-4 sm:mt-6 lg:mt-8 text-white">
          {res[0].para1}
        </p>

        <Link href="/blog">
        <Button className="mt-6 sm:mt-8 lg:mt-10 text-sm xsm:text-base sm:text-lg md:text-xl lg:text-[18px] bg-[#7C4EE4] hover:bg-purple-400 hover:text-black px-4 sm:px-6 lg:px-8 py-2">
          {res[0].btnText}
        </Button>

        </Link>
      </div>
    </section>
  );
}

export default Hero;


