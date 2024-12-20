import React from "react"; 
import Image from "next/image";


const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="relative bg-gray-900 h-64 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold z-10">About Us</h1>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="background.png"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="roll.png"
              alt="Food 1"
              className="rounded-lg shadow-lg"
            />
            <img
              src="chicken.png"
              alt="Food 2"
              className="rounded-lg shadow-lg"
            />
            <img
              src="platesoap.png"
              alt="Food 3"
              className="rounded-lg shadow-lg"
            />
            <img
              src="mashroob.png"
              alt="Food 4"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-orange-500 text-sm uppercase mb-2">About Us</h2>
            <h3 className="text-4xl font-bold text-gray-800 leading-tight">
              Food is an important part of a balanced Diet
            </h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vitae placerat turpis. Mauris porta arcu id volutpat venenatis.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600">
                Show more
              </button>
              <button className="flex items-center text-orange-500 font-medium gap-2">
                <span className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  ▶
                </span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-12 px-4 lg:px-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vitae placerat turpis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 flex items-center justify-center rounded-full">
              <span className="text-orange-500 text-2xl">🍳</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">Best Chef</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 flex items-center justify-center rounded-full">
              <span className="text-orange-500 text-2xl">🍴</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">120 Item Food</h3>
            <p className="text-gray-600 mt-2">
              Quisque vitae placerat turpis. Mauris porta arcu id volutpat.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 flex items-center justify-center rounded-full">
              <span className="text-orange-500 text-2xl">🌿</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">Clean Environment</h3>
            <p className="text-gray-600 mt-2">
              Vestibulum tincidunt ex id augue facilisis malesuada.
            </p>
          </div>
        </div>
      </section>

      <section>
      <div className="bg-white text-gray-800 font-sans">
      {/* Team Section */}
      <section className="bg-orange-500 py-12">
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Team Member</h2>
          <p className="mt-2 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            pharetra dui, nec massa congue.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Team Cards */}
          {[
            { name: "Mark Henry", role: "Owner", Image: "/bestchef.png"} ,
            { name: "Lucky Helen", role: "Chef", Image: "/bestchef.png" },
            { name: "Moon Henry", role: "Founder", Image: "/bestchef.png" },
            { name: "Tom Monrow", role: "Specialist", Image: "/bestchef.png" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
            >
              <div className="relative w-full h-56">
                <Image
                  src="/bestchef.png"
                  alt= "/Member.name"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center space-x-3">
                  <button className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600">
                    <i className="fas fa-facebook-f"></i>
                  </button>
                  <button className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600">
                    <i className="fas fa-twitter"></i>
                  </button>
                  <button className="text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600">
                    <i className="fas fa-instagram"></i>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What our client are saying</h2>
        </div>
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="relative w-20 h-20 mx-auto">
              <Image
                src="/man.png"
                alt="Client"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <blockquote className="mt-4 italic text-gray-600">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum."
            </blockquote>
            <h4 className="mt-4 text-lg font-semibold">Alamin Hasan</h4>
            <p className="text-orange-500">Food Specialist</p>
            <div className="mt-2 text-yellow-500">
              {/* Star Ratings */}
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </section>
    </div>
      </section>
      <section>
      <div className="bg-white text-gray-800">
      {/* Heading Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Our Food Menu</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          pharetra dui, nec massa congue.
        </p>
      </section>

      {/* Category Tabs */}
      <nav className="flex justify-center space-x-4 text-sm font-semibold mb-10">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
          (category, index) => (
            <button
              key={index}
              className="text-orange-500 hover:text-orange-600"
            >
              {category}
            </button>
          )
        )}
      </nav>

      {/* Menu Items Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Menu Item */}
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b pb-4 mb-4"
              >
                <div>
                  <h3 className="text-xl font-semibold text-orange-600">
                    Alder Grilled Chinook Salmon
                  </h3>
                  <p className="text-sm text-gray-500">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-xs text-gray-400 mt-1">560 CAL</p>
                </div>
                <p className="text-xl font-bold text-orange-500">$32</p>
              </div>
            ))}
        </div>
        {/* View Menu Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            View Menu
          </button>
        </div>
      </section>
    </div>

      </section>
    </div>

  );
};

export default AboutUsPage;