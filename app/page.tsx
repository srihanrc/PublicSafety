// app/page.tsx

'use client';

import type { FC } from 'react';

const Home: FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 bg-white">

      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-600 text-center">
        LightMap: Illuminate the Dark
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-700">
        Updates "red zones" to indicate the need for better lighting.
      </p>

      {/* Report a Dark Spot Button */}
      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition">
        Report a Dark Spot
      </button>

      {/* LightMap description */}
      <p className="text-center text-gray-700">
        Check out the LightMap page to notice any dark spots.
      </p>

      {/* View LightMap Button */}
      <button className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition">
        View LightMap
      </button>

      {/* Purpose Section */}
      <section className="text-center pt-6">
        <h2 className="text-xl text-gray-400 font-semibold mb-2">
          What is the purpose of LightMap?
        </h2>
        <p className="text-gray-700 max-w-md">
          We want to create a safer space for SJSU. Our goal is to create better lighting
          for areas that are dark to reduce car accidents, robbery, etc.
        </p>
      </section>

    </main>
  );
};

export default Home;

