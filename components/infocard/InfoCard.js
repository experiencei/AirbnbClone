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
        <div  className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            />
        </div>
             <div className="flex flex-col pr-4 flex-grow pl-5 " >
                <div  className="flex justify-between">

                </div>
             </div>
        </div>
    )
}

export default InfoCard
