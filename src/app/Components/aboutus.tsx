import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-orange-500 text-lg font-semibold">About us</h2>
          <h1 className="text-4xl font-bold leading-tight mt-2">
            We <span className="text-orange-500">Create</span> the best foody product
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start space-x-3">
              <span className="text-orange-500">✔️</span>
              <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500">✔️</span>
              <p>Quisque diam pellentesque bibendum non dui volutpat fringilla.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-orange-500">✔️</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-6 py-2 mt-6 rounded hover:bg-orange-600">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="eggdish.png"
            alt="Food 1"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div className="grid grid-rows-2 gap-4">
            <img
              src="Rolldish.png"
              alt="Food 2"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <img
              src="sandwich.png"
              alt="Food 3"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
