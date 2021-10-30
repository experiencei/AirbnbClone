import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({
    description,
    img,
    lat,
    long,
    location,
    price,
    star,
    title,
    total,
}) {
    return (
        <div   className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
          transition duration-200 ease-out first:border-t
        ">
            
        </div>
    )
}

export default InfoCard
