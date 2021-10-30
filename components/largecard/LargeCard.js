import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
    return (
        <section  className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px ]">
            <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
            </div>
            <div   className="absolute top-1/3 left-12">
              <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
            </div>
        </section>
    )
}

export default LargeCard