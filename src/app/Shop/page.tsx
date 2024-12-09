import Image from "next/image";
import React from "react";

const Shop = () => {
  const products = [
    { name: "Pizza", image: "/pizza.png" },
    { name: "Burger", image: "/burger.png" },
    { name: "Sandwiches", image: "/Rectangle 8874.png" },
    { name: "Chicken Chup", image: "/chanaplate.png" },
    { name: "Drink", image: "/chillidish.png" },
    { name: "Non-Veg", image: "/largepizza.png" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: "url('/path-to-header-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Shop</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-6 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 hidden lg:block">
            {/* Categories */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Category</h2>
              <ul className="space-y-2">
                {[
                  "Sandwiches",
                  "Burger",
                  "Chicken Chup",
                  "Drink",
                  "Pizza",
                  "Non-Veg",
                ].map((category) => (
                  <li key={category}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600"
                      />
                      <span>{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter by Price */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Filter by Price</h2>
              <input type="range" min="0" max="100" className="w-full" />
            </div>

            {/* Latest Products */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Latest Products</h2>
              <ul className="space-y-4">
                {products.map((product, idx) => (
                  <li key={idx} className="flex space-x-4">
                    <Image
                      src="/sllice.png "// Dynamic image path
                      alt="product.name"
                      width={64}
                      height={64} // Added width and height
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <p>{product.name}</p>
                      <p className="text-gray-500">$10.00</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-span-3">
            {/* Sorting */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <label
                  htmlFor="sort"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sort By
                </label>
                <select
                  id="sort"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                >
                  <option>Newest</option>
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Items */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <Image
                    src={product.image} // Dynamic image path
                    alt={product.name}
                    width={300}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500 mt-1 line-through">$50.00</p>
                    <p className="text-orange-600 font-bold mt-1">$25.00</p>
                    <button className="mt-4 block w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded ${
                      idx === 1
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
