"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="flex flex-row justify-between  bg-red-500 w-full h-20 p-5 sticky top-0">
      <div className="flex flex-row items-center gap-2">
        <Image src="/globe.svg" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold">Travel App</span>
      </div>
      <div className="flex flex-row justify-between w-1/3">
        <Link
          href="/ "
          className={` ${pathName === "/" ? "text-blue-400 scale-120  " : "text-gray-400"}`}
        >
          Home
        </Link>
        <Link
          href="/destination"
          className={` ${pathName === "/destination" ? "text-blue-400 scale-120  " : "text-gray-400"}`}
        >
          Destination
        </Link>
        <Link
          href="/contact"
          className={` ${pathName === "/contact" ? "text-white" : "text-gray-400"}`}
        >
          Contact
        </Link>
        <Link
          href="/login"
          className={` ${pathName === "/login" ? "text-white" : "text-gray-400"}`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={` ${pathName === "/register" ? "text-white" : "text-gray-400"}`}
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
