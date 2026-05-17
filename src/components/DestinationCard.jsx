import Image from "next/image";
import React from "react";

const DestinationCard = ({ destination }) => {
  const { imageUrl, price, destinationName, country, duration } = destination;
  return (
    <div>
      <Image
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
      ></Image>
    </div>
  );
};

export default DestinationCard;
