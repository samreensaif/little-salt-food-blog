




import AboutSection from '@/components/aboutSection/AboutSection';
import React from 'react';

function AboutPage() {
  return (
    <section className='py-10 flex flex-col justify-center items-center bg-purple-200'>
      <div className="w-full text-center mt-[80px] mb-7">
        <h1 className="text-4xl sm:text-6xl font-semibold text-[#7C4EE4]">About Little Salt.</h1>
      </div>

      <div>
        <p className='w-full max-w-[600px] text-center text-[18px] sm:text-[20px] px-4'>
          Welcome to Little Salt, your culinary journey into the heart of flavor. Our mission is to inspire your inner chef with simple, delicious recipes, and to guide you through the world of food with insightful articles, culinary tips, and mouthwatering photography.<br /><br />
          Founded by a group of passionate food lovers and home cooks, Little Salt is dedicated to sharing our love for all things food. We believe that cooking should be an enjoyable and accessible experience, and we strive to provide you with easy-to-follow recipes, helpful cooking techniques, and a touch of culinary inspiration to elevate your everyday meals.<br /><br />
          Whether you are a seasoned home cook or just starting your culinary adventure, Little Salt is your go-to destination for delicious recipes, expert advice, and a community of fellow food enthusiasts. Join us as we explore the joy of cooking and savor the magic of every bite.<br /><br />
        </p>
      </div>
      <AboutSection />
    </section>
  );
}

export default AboutPage;



// import AboutSection from '@/components/aboutSection/AboutSection'
// import React from 'react'

// function AboutPage() {
//   return (

//     <section className='py-10 flex flex-col justify-center items-center bg-purple-200'>

//     <div className="w-full text-center  mt-[80px] mb-7">
//         <h1  className="text-6xl font-semibold text-[#7C4EE4]">About Little Salt</h1>
//       </div>

//       <div>
//         <p className=' w-[600px] text-center text-[20px] '>
//         Welcome to Little Salt, your culinary journey into the heart of flavor. Our mission is to inspire your inner chef with simple, delicious recipes, and to guide you through the world of food with insightful articles, culinary tips, and mouthwatering photography.<br/><br/><br/>
// Founded by a group of passionate food lovers and home cooks, Little Salt is dedicated to sharing our love for all things food. We believe that cooking should be an enjoyable and accessible experience, and we strive to provide you with easy-to-follow recipes, helpful cooking techniques, and a touch of culinary inspiration to elevate your everyday meals.<br/><br/><br/>

// Whether you're a seasoned home cook or just starting your culinary adventure, Little Salt is your go-to destination for delicious recipes, expert advice, and a community of fellow food enthusiasts. Join us as we explore the joy of cooking and savor the magic of every bite.<br/><br/>
//         </p>
//       </div>
//         <AboutSection/>
//       </section>
//   )
// }

// export default AboutPage