import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h4 className="text-yellow-500 font-medium text-lg">It's Quick & Amusing!</h4>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="text-yellow-400">The</span> Art of speed <br /> food Quality
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg font-medium">
            See Menu
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src="Image (2).png"
            alt="Delicious Food"
            className="rounded-full shadow-lg w-3/4 mx-auto"
          />
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
