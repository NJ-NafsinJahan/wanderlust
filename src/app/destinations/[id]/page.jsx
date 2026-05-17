import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDollar, BiEdit } from "react-icons/bi";
import { CgCalendarToday } from "react-icons/cg";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  console.log(destination);
  //   console.log(id);

  const {
    _id,
    imageUrl,
    price,
    destinationName,
    country,
    duration,
    description,
  } = destination;
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 items-center">
      <h1 className="text-center">Destination Details Page</h1>
      <div className=" flex justify-center items-center flex-col">
        {/* edit modal add kora */}
        <EditModal destination={destination}></EditModal>

        <Image
          className="p-4 rounded-3xl"
          alt={destinationName}
          src={imageUrl}
          height={400}
          width={600}
        ></Image>

        {/* description */}

        <div className="">
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
            <p className="text-2xl pt-5 font-bold">OverView:</p>
            <p>{description}</p>
            {/* 
            button
            <Link href={`/destinations/${_id}`}>
              <Button
                variant="ghost"
                className="mt-1 text-cyan-500 font-extrabold text-lg"
              >
                Book Now <FiArrowUpRight />
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
