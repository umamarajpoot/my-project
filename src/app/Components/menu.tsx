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
            className="w-80 h-80 rounded-full object-cover border-4 border-green-500"
          />
        </div>
        </div>

      {/* Menu Section */}
      <h2 className="text-center text-orange-500 text-lg mb-3">Choose & Pick</h2>
      <h1 className="text-center text-4xl font-bold mb-8">
        <span className="text-orange-500">From</span> Our Menu
      </h1>
      <div className="flex justify-center gap-8 text-gray-400 mb-8">
        {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'].map((category) => (
          <span key={category} className="cursor-pointer hover:text-orange-500">{category}</span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md w-[300px]"
          >
            <img src={item.img} alt={item.title} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
              <p className="text-orange-500 font-bold mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;