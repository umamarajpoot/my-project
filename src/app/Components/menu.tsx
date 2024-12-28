import React from 'react';

const MenuPage = () => {
  const menuItems = [
    { title: 'Lettuce Leaf', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'lettuce.png' },
    { title: 'Fresh Breakfast', price: '14.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'cheezburger.png' },
    { title: 'Mild Butter', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'mildbutter.png' },
    { title: 'Fresh Bread', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'bread.png' },
    { title: 'Glow Cheese', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'glowcheez.png' },
    { title: 'Italian Pizza', price: '14.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'italianpizza.png' },
    { title: 'Slice Beef', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'sandwich.png' },
    { title: 'Mushroom Pizza', price: '12.5$', desc: 'Lacus nisi, et ac dapibus velit in consequat.', img: 'burger.png' },
  ];

  return (
    <div className="bg-black text-white py-10">
      {/* Main Image Section */}
      <div className="relative bg-black py-10">
        <div className="flex justify-center">
          <img
            src="greenplate.png"
            alt="Main Dish"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-green-500"
          />
        </div>
      </div>
      <div className="bg-black text-white py-10">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-6">
    {[
      { icon: '👨‍🍳', title: 'Professional Chefs', count: '420' },
      { icon: '🍔', title: 'Items Of Food', count: '320' },
      { icon: '🍴', title: 'Years Of Experience', count: '30+' },
      { icon: '🍕', title: 'Happy Customers', count: '220' },
    ].map((stat, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        <div className="text-5xl sm:text-6xl mb-3">{stat.icon}</div>
        <h3 className="text-sm sm:text-base font-semibold">{stat.title}</h3>
        <p className="text-orange-500 text-lg sm:text-xl font-bold mt-2">{stat.count}</p>
      </div>
    ))}
  </div>
</div>




      {/* Menu Section */}
      <h2 className="text-center text-orange-500 text-sm sm:text-lg mb-3">Choose & Pick</h2>
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-8">
        <span className="text-orange-500">From</span> Our Menu
      </h1>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-gray-400 mb-8">
        {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'].map((category) => (
          <span
            key={category}
            className="cursor-pointer hover:text-orange-500 text-sm sm:text-base"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
              <p className="text-orange-500 font-bold mt-2 text-sm sm:text-base">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
