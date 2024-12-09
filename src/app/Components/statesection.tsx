import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto flex justify-center items-center gap-12">
        {/* Stat Item 1 */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-5xl mb-2">
            {/* Add an appropriate icon */}
            👨‍🍳
          </div>
          <h3 className="text-lg font-semibold">Professional Chefs</h3>
          <p className="text-2xl font-bold">420</p>
        </div>

        {/* Stat Item 2 */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-5xl mb-2">
            {/* Add an appropriate icon */}
            🍔
          </div>
          <h3 className="text-lg font-semibold">Items Of Food</h3>
          <p className="text-2xl font-bold">320</p>
        </div>

        {/* Stat Item 3 */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-5xl mb-2">
            {/* Add an appropriate icon */}
            🍴
          </div>
          <h3 className="text-lg font-semibold">Years Of Experience</h3>
          <p className="text-2xl font-bold">30+</p>
        </div>

        {/* Stat Item 4 */}
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-5xl mb-2">
            {/* Add an appropriate icon */}
            🍕
          </div>
          <h3 className="text-lg font-semibold">Happy Customers</h3>
          <p className="text-2xl font-bold">220</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
