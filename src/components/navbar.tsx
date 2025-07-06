// app/components/NavBar.tsx

import { group } from "console";
import Link from "next/link";
import { FaGear } from "react-icons/fa6";

export default function NavBar() {

  return (
    <nav className="bg-gray-800 p-5 fixed w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="group text-2xl font-bold mb-4 md:mb-0 flex flex-row gap-2 items-center">
        <FaGear className="group-hover:cursor-crosshair"/>
          <Link href="/">McPM.Dev</Link>
        </h1>
          <div className="flex-col gap-3 md:flex md:flex-row md:gap-5">
            <Link className="font-bold hover:text-blue-500" href="/">
              Home
            </Link>
            <Link className="font-bold hover:text-blue-500" href="/">
              Projects
            </Link>
            <Link className="font-bold hover:text-blue-500" href="#aboutme">
              About Me
            </Link>
            <Link className="font-bold hover:text-blue-500" href="/">
              Contact Me
            </Link>
          </div>
      </div>
    </nav>
  );
}
