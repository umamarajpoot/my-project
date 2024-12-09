import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-orange-500">Still</span> You Need Our Support?
          </h2>
          <p className="text-gray-400 mb-6">
            Don't wait, make a smart & logical quote here. It's pretty easy.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4">About Us.</h3>
            <p className="text-gray-400 mb-4">
              Corporate clients and leisure travelers have been relying on
              GroundLink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="text-orange-500 flex items-center">
              <span className="bg-orange-500 text-white p-2 rounded-full mr-2">
                🕒
              </span>
              <div>
                <p>Opening Hours</p>
                <p>Mon - Sat (8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-bold mb-4">Help?</h3>
            <ul className="space-y-2 text-gray-400">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-bold mb-4">Recent Post</h3>
            <ul className="space-y-4 text-gray-400">
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img
                    src="chicken.png"
                    alt="Post Thumbnail"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="text-sm">20 Feb 2022</p>
                    <p className="text-sm font-medium">Keep Your Business</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex justify-between items-center text-gray-400 text-xs">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;