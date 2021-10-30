import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
  } from "@heroicons/react/solid";
  import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header() {
    return (
        <header  className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            {/* left */}
             <div className="relative flex items-center h-10 cursor-pointer my-auto">
             <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                onClick={() => router.push("/")}
                />
             </div> 

             {/* middle */}
             <div className="flex items-center justify-between md:border-2 md:shadow-sm rounded-full py-2">

                 
             </div>
        </header>
    )
}

export default Header
