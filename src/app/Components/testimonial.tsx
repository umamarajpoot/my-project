import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold mb-4">
          <span className="text-orange-500">Testimonials</span>
        </h2>
        <h3 className="text-3xl font-bold mb-8">What our client are saying</h3>

        {/* Testimonial Card */}
        <div className="bg-white text-black mx-auto p-8 rounded-lg shadow-lg relative max-w-3xl">
          {/* Profile Image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              className="w-20 h-20 rounded-full border-4 border-orange-500"
              src="Ellipse 6 (1).png"
              alt="Client"
            />
          </div>
          {/* Quotation Marks */}
          <div className="text-orange-500 text-3xl mb-4">“</div>

          {/* Testimonial Text */}
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Rating */}
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < 4 ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                // className={h-6 w-6 ${i < 4 ? "text-orange-500" : "text-gray-400"}}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </div>

          {/* Client Name */}
          <h4 className="text-lg font-semibold">Alamin Hasan</h4>
          <p className="text-sm text-gray-500">Food Specialist</p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === 0 ? "bg-orange-500" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;