import React from "react";

const Menu: React.FC = () => {
  return (
    <div>
    <header className="relative">
      {/* Background Image */}
      <img
        src="background.png"
        alt="Menu Background"
        className="w-full h-48 object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        {/* Title */}
        <h1 className="text-white text-4xl font-bold">Our Menu</h1>
      </div>
    </header>
    <section>
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="Rectangle 8874.png"
            alt="Starter Dish"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Menu Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Starter Menu</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-gray-200 pb-2">
              <div>
                <p className="font-semibold text-gray-800">
                  Alder Grilled Chinook Salmon
                </p>
                <p className="text-sm text-gray-500">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-xs text-gray-400">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold text-lg">32$</p>
            </li>
            <li className="flex justify-between items-center border-b border-gray-200 pb-2">
              <div>
                <p className="font-semibold text-gray-800">Berries and creme tart</p>
                <p className="text-sm text-gray-500">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-xs text-gray-400">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold text-lg">43$</p>
            </li>
            <li className="flex justify-between items-center border-b border-gray-200 pb-2">
              <div>
                <p className="font-semibold text-gray-800">
                  Tormentoso Bush Pizza Pintoage
                </p>
                <p className="text-sm text-gray-500">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-xs text-gray-400">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold text-lg">14$</p>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">
                  Spicy Vegan Potato Curry
                </p>
                <p className="text-sm text-gray-500">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-xs text-gray-400">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold text-lg">35$</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
    <section>
    
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
  </section>
<section>
    <div className="bg-white text-black py-12 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-8">
          <img
            src="dessert.png" // Replace with actual dessert image
            alt="Dessert"
            className="rounded-lg object-cover w-full"
          />
          <h2 className="text-lg font-bold text-orange-500">🍮 Dessert</h2>
          <ul className="space-y-6">
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">Fig and lemon cake</h3>
                <p className="text-sm text-gray-500">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">32$</p>
            </li>
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">Creamy mascarpone cake</h3>
                <p className="text-sm text-gray-500">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">43$</p>
            </li>
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Pastry, blueberries, lemon juice
                </h3>
                <p className="text-sm text-gray-500">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">14$</p>
            </li>
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">Pain au chocolat</h3>
                <p className="text-sm text-gray-500">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-sm text-gray-500">580 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">35$</p>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <img
            src="drink.png" // Replace with actual drinks image
            alt="Drinks"
            className="rounded-lg object-cover w-full"
          />
          <h2 className="text-lg font-bold text-orange-500">🍹 Drinks</h2>
          <ul className="space-y-6">
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">Caffè macchiato</h3>
                <p className="text-sm text-gray-500">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">32$</p>
            </li>
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Aperol Spritz Capacianno
                </h3>
                <p className="text-sm text-gray-500">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">43$</p>
            </li>
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">Caffè Latte Campuri</h3>
                <p className="text-sm text-gray-500">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">14$</p>
            </li>
            <li className="flex justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Tormentoso BushTea Pintoage
                </h3>
                <p className="text-sm text-gray-500">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 text-lg font-bold">35$</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</section>
<section>
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-2">
          Partners & Clients
        </h4>
        <h2 className="text-2xl font-bold mb-8">
          We work with the best people
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Replace the src with actual image paths */}
          <img
            src="image 2 (1).png"
            alt="Restaurant Logo"
            className="h-16 grayscale"
          />
          <img
            src="image 60 (1).png"
            alt="Bakery Logo"
            className="h-16 grayscale"
          />
          <img
            src="image 56.png"
            alt="Fork & Spoon Logo"
            className="h-16 grayscale"
          />
          <img
            src="image 58 (1).png"
            alt="Wolf Coffee Logo"
            className="h-16 grayscale"
          />
          <img
            src="image 57 (2).png"
            alt="Bistro Logo"
            className="h-16 grayscale"
          />
          <img
            src="image 59 (2).png"
            alt="Bakery Logo"
            className="h-16 grayscale"
          />
        </div>
      </div>
    </div>
</section>
    </div>

  );
};

export default Menu;