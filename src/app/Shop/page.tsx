import React from "react";

const Shop = () => {
  const products = [
    { id: 1, name: "Fresh Lime", price: 20, oldPrice: 25, image: "blackplate.png" },
    { id: 2, name: "Chocolate Muffin", price: 15, oldPrice: 20, image: "metha.png" },
    { id: 3, name: "Burger", price: 10, oldPrice: 14, image: "cheezburger.png" },
    { id: 4, name: "Coventry Burger", price: 12, oldPrice: 16, image: "chezzburger.png" },
    { id: 5, name: "Drink", price: 5, oldPrice: 8, image: "juice.png" },
    { id: 6, name: "Pizza", price: 18, oldPrice: 22, image: "pizza.png" },
    { id: 7, name: "Choco Butter", price: 8, oldPrice: 10, image: "blackcake.png" },
    { id: 8, name: "Sandwiches", price: 7, oldPrice: 9, image: "layerburger.png" },
    { id: 9, name: "Chicken Chop", price: 15, oldPrice: 19, image: "Mask Group (14).png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-black text-white text-center py-16">
        <h1 className="text-2xl md:text-4xl font-bold">Our Shop</h1>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('background.png')" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 bg-white p-6 shadow">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-black">Search Product</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full p-2 rounded-l bg-[#FFF8EB] border border-gray-300 text-black"
              />
              <button className="bg-[#FF9900] text-white p-2 rounded-r shadow">
                🔍
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-black">Category</h2>
            <ul>
              {["Sandwiches", "Burger", "Pizza", "Chicken Chop", "Drinks"].map(
                (category) => (
                  <li key={category} className="text-black flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-black">Filter by Price</h2>
            <input type="range" min="0" max="100" className="w-full" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">Latest Products</h2>
            <ul>
              {["Product Name", "Product Name", "Product Name"].map(
                (product) => (
                  <li key={product} className="text-black flex items-center my-2">
                    <img
                      src="/p1.png"
                      alt="Product"
                      className="w-10 h-10 mr-2"
                    />
                    <span>{product}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-span-3">
          {/* Filters */}
          <div className="flex flex-wrap text-black justify-between items-center mb-6">
            <div className="flex flex-wrap space-x-4">
              <div>
                <label htmlFor="sort" className="text-black mr-2 font-medium">
                  Sort By:
                </label>
                <select
                  id="sort"
                  className="text-black border border-gray-300 p-2 rounded"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div>
                <label htmlFor="show" className="mr-2 font-medium">
                  Show:
                </label>
                <select
                  id="show"
                  className="border border-gray-300 p-2 rounded"
                >
                  <option>Default</option>
                  <option>10</option>
                  <option>20</option>
                </select>
              </div>
            </div>
          </div>

          {/* Dynamic Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white text-black shadow p-4">
                <img
                  src={`/images/${product.image}`}
                  alt={product.name}
                  className="w-full h-56 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-500 font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-red-500 line-through">${product.oldPrice.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center mt-10 space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-[#FF9900] border border-[#FF9900] rounded">
              «
            </button>
            <button className="px-4 py-2 bg-gray-200 text-[#FF9900] border border-[#FF9900] rounded">
              1
            </button>
            <button className="px-4 py-2 bg-[#FF9900] text-white rounded">2</button>
            <button className="px-4 py-2 bg-gray-200 text-[#FF9900] border border-[#FF9900] rounded">
              3
            </button>
            <button className="px-4 py-2 bg-gray-200 text-[#FF9900] border border-[#FF9900] rounded">
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
