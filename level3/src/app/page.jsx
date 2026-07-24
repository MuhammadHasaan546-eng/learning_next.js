"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Link className="hover:text-red-500" href={"/"}>
        Home
      </Link>
      <Link className="hover:bg-red-500" href={"/about"}>
        About
      </Link>
      <Link className="hover:bg-red-500" href={"/contact"}>
        Contact
      </Link>
      <Link className="hover:bg-red-500" href={"/services"}>
        Services
      </Link>

      <button
        className="border text-red-500 hover:bg-red-500"
        onClick={() => router.push("/about")}
      >
        go to about
      </button>

      <Image
        src="https://images.unsplash.com/photo-1779896412092-4cb69cf4ccad?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={100}
        height={100}
        alt="image"
      ></Image>
    </div>
  );
}
