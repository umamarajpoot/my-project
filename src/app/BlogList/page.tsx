import React from "react";

const BlogList = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="relative bg-purple-700 h-40 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Blog List</h1>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="background.png"
            alt="Header Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-10 px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3 space-y-10">
            {/* Blog Post 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="roll2.png"
                alt="Blog Image 1"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Blog Title 1
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Short description of the blog goes here.
                </p>
                <button className="text-purple-700 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="largepizza.png"
                alt="Blog Image 2"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Blog Title 2
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Short description of the blog goes here.
                </p>
                <button className="text-purple-700 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="chillidish.png"
                alt="Blog Image 3"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Blog Title 3
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Short description of the blog goes here.
                </p>
                <button className="text-purple-700 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="sandwich.png"
                alt="Blog Image 4"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Blog Title 4
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Short description of the blog goes here.
                </p>
                <button className="text-purple-700 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bg-gray-50 p-6 shadow-md rounded-lg">
            {/* Author Info */}
            <div className="text-center mb-6">
              <img
                src="man.png"
                alt="Author"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">Author Name</h3>
              <p className="text-gray-500 text-sm">Food Blogger</p>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {["Pizza", "Burger", "Soups", "Desserts"].map((category) => (
                  <li
                    key={category}
                    className="text-purple-700 hover:underline cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
              <ul className="space-y-4">
                {Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <li key={index} className="flex items-center">
                      <img
                        src="Rolldish.png"
                        alt="Post Thumbnail"
                        className="rounded-lg w-16 h-16 object-cover mr-4"
                      />
                      <p className="text-gray-600 text-sm">
                        Popular post {index + 1}.
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
