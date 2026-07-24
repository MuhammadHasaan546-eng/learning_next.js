import React from "react";

const page = () => {
  const destination = [
    {
      id: 1,
      name: "Paris",
      image: "/paris.jpg",
      description: "The city of love",
    },
    {
      id: 2,
      name: "New York",
      image: "/new_york.jpg",
      description: "The city that never sleeps",
    },
    {
      id: 3,
      name: "Tokyo",
      image: "/tokyo.jpg",
      description: "The city of the future",
    },
    {
      id: 4,
      name: "Sydney",
      image: "/sydney.jpg",
      description: "The city of the opera",
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center gap-10">
      <span className="text-4xl font-bold">Popular destinations</span>
      <div className="grid grid-cols-4 gap-4 justify-center">
        {destination.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <img src={item.image} alt={item.name} />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-lg text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
