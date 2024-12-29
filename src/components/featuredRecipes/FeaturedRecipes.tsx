
import { CalendarDays, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Categories from "../categories/Categories";
import { client } from "@/sanity/lib/client";


async function FeaturedRecipes() {
  interface Recipe {
    description: string;
    date: string;
    buttonText: string;
    recipeTitle: string;
    recipeImage: string;
    detailDescription: string;
    minutes: string;
  }

  interface Title {
    title: string;
  }

  const res: Recipe[] = await client.fetch(`
    *[_type=='landingPage'][].sections[1].recipes[]{
      'description':description,
      'date':date,
      'buttonText':buttonText,
      'recipeTitle':recipeTitle,
      'detailDescription':detailDescription,
      'minutes':minutes,
      'recipeImage':recipeImage.asset->url
    }
  `);

  const res1: Title[] = await client.fetch(`
    *[_type=='landingPage'][].sections[1]{title}
  `);

  return (
    <>
      {/* Title Section */}
      <div className="w-full text-center mt-[60px] mb-[60px]">
      
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#7C4EE4]">
            {res1[0].title}
          </h1>
        
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10 mx-5 sm:mx-10 md:mx-20 lg:mx-32 justify-center lg:justify-between mt-10">
        {/* Recipe Cards */}
        <div className="flex flex-col gap-10 items-center">
          {res.map((item: Recipe, index: number) => (
                       
                        <div key={index} className="w-full xsm:w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-auto border-2 border-[#7C4EE4] pb-4 rounded-lg ">
                          {/* Top Image */}
                          <div className="relative w-full h-[200px] xsm:h-[240px] sm:h-[280px]">
                            <Image
                              src={item.recipeImage}
                              fill
                              objectFit="cover"
                              alt="Recipe Image"
                              className=" rounded-lg hover:scale-105 transition-all duration-1000 ease-in-out"
                            />
                          </div>
          
                          {/* Bottom Text */}
                          <div className="flex flex-col space-y-3 text-left mt-4 px-3">
                            <p className="flex items-center space-x-2 text-sm sm:text-base">
                              <CalendarDays className="inline-flex" />
                              <span>{item.date}</span>
                            </p>
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                              {item.recipeTitle}
                            </h1>
                            <p className="text-sm sm:text-lg font-semibold">
                              {item.description}
                            </p>
          
                            {/* Link Button */}
                            <Link
                              href={`/recipe/id?recipeTitle=${item.recipeTitle}&recipeImage=${item.recipeImage}&description=${item.description}&date=${item.date}&detailDescription=${item.detailDescription}&minutes=${item.minutes}`}
                            >
                              <p className="inline-block text-white p-2 mt-2 hover:underline bg-[#7C4EE4] text-sm sm:text-base">
                                {item.buttonText} <MoveRight className="inline-flex ml-2" />
                              </p>
                            </Link>
                          </div>
                        </div>
                      
          ))}
        </div>

        {/* Categories Section */}
        <div className="w-full lg:w-1/2">
          <Categories />
        </div>
      </div>
    </>
  );
}

export default FeaturedRecipes;


