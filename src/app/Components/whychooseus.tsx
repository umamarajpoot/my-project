import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-10">
        {/* Left Section: Images */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Top-left image */}
            <div className="row-span-2">
              <img
                src="roll.png"
                alt="Tacos"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            {/* Top-right image */}
            <img
              src="burger.png"
              alt="Burger"
              className="rounded-lg object-cover"
            />
            {/* Bottom-left image */}
            <img
              src="chicken.png"
              alt="Dish"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Bottom-wide image */}
          <img
            src="whiteplate.png"
            alt="Food Variety"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Section: Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-yellow-500 text-lg font-semibold mb-2">
            Why Choose Us
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-yellow-500">Extra</span> ordinary taste <br />
            And Experienced
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non ullamcorper eleifend. Ut viverra
            augue urna, vitae feugiat velit volutpat et. Ut venenatis vehicula
            massa et interdum.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div>
              <div className="bg-orange-500 text-white w-12 h-12 mx-auto flex items-center justify-center rounded-full">
                🍔
              </div>
              <p className="mt-2 font-medium">Fast Food</p>
            </div>
            <div>
              <div className="bg-orange-500 text-white w-12 h-12 mx-auto flex items-center justify-center rounded-full">
                🍽️
              </div>
              <p className="mt-2 font-medium">Lunch</p>
            </div>
            <div>
              <div className="bg-orange-500 text-white w-12 h-12 mx-auto flex items-center justify-center rounded-full">
                🍷
              </div>
              <p className="mt-2 font-medium">Dinner</p>
            </div>
          </div>
          <div className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg font-bold">
            30+
            <span className="text-gray-900 bg-white px-2 py-1 rounded-md">
              Years of Experienced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
