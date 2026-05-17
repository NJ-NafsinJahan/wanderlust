import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-white m-5">
        <ul className="flex justify-between items-center gap-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/destinations"}>Destinations</Link>
          </li>
          <li>
            <Link href={"/my-booking"}>My Booking</Link>
          </li>
          <li>
            <Link href={"/add-destination"}>Add Destination</Link>
          </li>
        </ul>
        {/* logo */}
        <div className="">
          <Image
            src={"/assets/Wanderlast.png"}
            height={200}
            width={200}
            alt="logo"
          ></Image>
        </div>

        {/* right side  */}
        <ul className="flex justify-between items-center gap-6">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link href={"/login"}>LogIn</Link>
          </li>
          <li>
            <Link href={"/signup"}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
