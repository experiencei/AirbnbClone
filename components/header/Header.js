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
    const [searchInput, setSearchInput] = useState("");

    function onSearchInputChange(e) {
        setSearchInput(e.target.value);
      }

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
             <input
                    value={searchInput}
                    onChange={onSearchInputChange}
                    placeholder="Start your search"
                    type="text"
                    className=" pl-5 bg-transparent outline-none flex-grow border-0"
             />
             <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
             </div>

             {/* Right */}
             <div className="flex items-center space-x-4 justify-end text-gray-500">
             <p className="hidden md:inline">Become a host</p>
               <GlobeAltIcon className="h-6 cursor-pointer" />
               <div className="flex items-center border-2 rounded-full p-2 space-x-2">
               <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6" />
               </div>
             </div>

             {searchInput && (
                <div className="col-span-3 flex flex-col mx-auto">
                <DateRangePicker
                        ranges={[InitSelectionRange]}
                        onChange={handleRangeSelect}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                    />
                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl flex-grow font-semibold">
                      Number of Guests
                   </h2>
                   <UsersIcon className="h-5" />
                </div>

                </div>
             ) }
        </header>
    )
}

export default Header
