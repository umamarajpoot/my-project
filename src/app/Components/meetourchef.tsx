const MeetOurChef = () => {
    return (
      <div className="bg-black text-white py-16 px-8">
        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-6">Chefs</h2>
        <h3 className="text-center text-2xl font-semibold mb-12">
          <span className="text-yellow-400">Meet</span> Our Chef
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "D. Estwood", role: "Chief Chef", img: "chefcard4.png" },
            { name: "D. Scoriesh", role: "Assistant Chef", img: "chefcard3.png" },
            { name: "M. William", role: "Advertising Chef", img: "chefcard2.png" },
            { name: "W. Readfroad", role: "Chef", img: "chefcard1.png" },
          ].map((chef, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold">{chef.name}</h4>
                <p className="text-sm text-gray-500">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-yellow-600 transition">
            See More
          </button>
        </div>
      </div>
    );
  };
  
  export default MeetOurChef;