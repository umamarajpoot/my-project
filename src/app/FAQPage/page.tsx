import React from "react";

const FAQPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="relative bg-gray-900 h-40 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold z-10">FAQ Page</h1>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="background.png"
            alt="FAQ Header Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </header>

      {/* FAQ Content */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Questions Looks Here
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Item */}
          {[
            "How we serve food?",
            "How is our food quality?",
            "How do we give home delivery?",
            "How can we get in touch with you?",
            "What will be delivered? And when?",
            "Is this restaurant 24 hours open?",
          ].map((question, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {question}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt.
                </p>
              </div>
              <button className="text-gray-500 text-2xl font-bold">
                {index % 2 === 0 ? "+" : "—"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
