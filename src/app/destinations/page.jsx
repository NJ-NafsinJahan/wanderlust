import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  //   console.log(destinations);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center p-2">All Destinations</h1>

      <div className="grid grid-cols-3 gap-4 p-4 mx-auto">
        {destinations.map((destination) => (
          <div key={destination._id}>
            <DestinationCard destination={destination}></DestinationCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
