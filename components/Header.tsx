import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2 ">
        <Link href={"/"}>
          <Image
            className="rounded-full w-auto h-auto"
            src={"https://i.ibb.co/PjHWWQK/illegal-recruitment.png"}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <Link href="/">
          <h1 style={{ cursor: "pointer" }}>Illegal Recruitment</h1>
        </Link>
      </div>

      <div>
        <Link
          href={"https://www.petitieonline.com/stop_hotia_-_salveaza_romani"}
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
          target="_blank"
        >
          Sign the Illegal Recruitment Petition Online!
        </Link>
      </div>
    </header>
  );
}

export default Header;
