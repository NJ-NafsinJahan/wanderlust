import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDollar, BiUpArrow } from "react-icons/bi";
import { CgCalendarToday } from "react-icons/cg";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, country, duration } =
    destination;
  return (
    <div className="border m-4 rounded-2xl">
      <Image
        className="p-4 rounded-3xl"
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
      ></Image>
      {/* description div */}

      <div className="p-4 ">
        <div className="flex items-center gap-2">
          <FiMapPin /> <span>{country}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="">
            <div className="">
              <h1 className="text-2xl font-bold ">{destinationName}</h1>
            </div>

            <div className=" flex items-center gap-2">
              <CgCalendarToday></CgCalendarToday> {duration}
            </div>
          </div>

          {/* price div */}
          <div className=" flex items-center gap-1 text-xl text-blue-900 font-bold">
            <BiDollar></BiDollar>
            {price}
          </div>
        </div>
        {/* button */}
        <Link href={`/destinations/${_id}`}>
          <Button
            variant="ghost"
            className="mt-1 text-cyan-500 font-extrabold text-lg"
          >
            Book Now <FiArrowUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
