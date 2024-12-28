



import Image from "next/image";

import { CalendarDays, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import { client } from "@/sanity/lib/client";

async function Blog() {
  interface BlogProps {
    title: string;
    description: string;
    minutes: string;
    date: string;
    blogImage: string;
    btnText: string;
  }

  const res: BlogProps[] = await client.fetch(`
    *[_type=='blogPage'][].sections[].blogEntry[]{
      'minutes': minutes,
      'description': description,
      'title': title,
      'date': date,
      'btnText': btnText,
      'blogImage': blogImage.asset->url,
    }
  `);

  const bTitle = await client.fetch(`
    *[_type=='blogPage'][].sections[0]{title}
  `);

  return (
    <div className="py-6 bg-purple-200">
      <div className="w-full text-center mt-[80px] mb-7">
        <h1
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-4xl sm:text-6xl font-semibold text-[#7C4EE4]"
        >
          {bTitle[0].title}
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 sm:mx-10 mb-7">
        {/* card */}
        {res.map((item: BlogProps, index: number) => {
          return (
            <div
              key={index}
              className="w-full max-w-[400px] h-[530px] border-2 border-[#8d70d1] flex flex-col gap-10 hover:shadow-lg rounded-lg hover:scale-105 transition-all duration-1000 ease-in-out"
            >
              {/* card image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.blogImage}
                  alt="mediterranean cuisine"
                  objectFit="cover"
                  fill
                  className="rounded-lg"
                />
              </div>
              {/* card content */}
              <div className="flex flex-col space-y-3 text-left px-3">
                <p className="flex items-center space-x-2">
                  <CalendarDays className="inline-flex" />
                  <span>{item.date}</span>
                </p>
                <h1 className="text-xl sm:text-2xl font-bold">{item.title}</h1>

                <Link href={`/blog/id?title=${item.title}&description=${item.description}&minutes=${item.minutes}&date=${item.date}&blogImage=${item.blogImage}`}>
                  <button className="inline-block text-white p-2 mt-2 hover:underline bg-[#7C4EE4]">
                    {item.btnText} <MoveRight className="inline-flex ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;

