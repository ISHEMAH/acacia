import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isLinkActive = (href: string) => {
    return pathname === href ? "text-blue-700 font-bold" : "text-gray-400";
  };

  return (
    <nav className="w-full py-5 justify-between md:px-24 sm:px-3 flex fixed border-1 border-gray-200 content-center z-50">
      <div className="logo w-24 h-5 ">
        <Link href="/">
          <Image
            src="/ACACIA.svg"
            className="object-contain w-full"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
      </div>

      <div className="w-54 h-6  object-fill ">
        <ul className="flex gap-3">
          <li>
            <Link href="/" passHref>
              <p className={` ${isLinkActive("/")}`}>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <p className={` ${isLinkActive("/about")}`}>About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <p className={` ${isLinkActive("/contact")}`}>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
