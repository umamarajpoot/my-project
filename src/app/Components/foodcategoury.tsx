import React from "react";

const FoodCategory = () => {
  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-yellow-500 text-lg font-semibold mb-2">
        Food Category
      </h2>
      <h1 className="text-center text-3xl font-bold mb-6">
        <span className="text-yellow-500">Choose</span> Food Item
      </h1>
      <div className="flex justify-center items-center gap-6 px-4 flex-wrap">
        {/* Food Item 1 */}
        <div className="relative w-60 h-60 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg">
          <img
            src="mashroob.png" // Replace with actual image link
            alt="Fast Food Dish"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
            Save 30%
          </div>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg font-bold px-2 py-1 rounded-md">
            Fast Food Dish
          </div>
        </div>

        {/* Food Item 2 */}
        <div className="w-60 h-60 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg">
          <img
            src="burger.png" // Replace with actual image link
            alt="Burger"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Food Item 3 */}
        <div className="w-60 h-60 rounded-lg overflow-hidden border-4 border-pink-500 hover:shadow-lg">
          <img
            src="chanaplate.png" // Replace with actual image link
            alt="Salad"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Food Item 4 */}
        <div className="w-60 h-60 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg">
          <img
            src="donat.png" // Replace with actual image link
            alt="Dessert"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
