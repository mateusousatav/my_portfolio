import Button from "./Button"
import Image, { StaticImageData } from "next/image"; 
import Link from 'next/link'

export default function ProjectCard({ src, alt, title, link }: {src:StaticImageData, alt:string, title:string, link:string}) {
  return (
    <div
      className="
        myCard 
        bg-gradient-to-b from-[#1F363D] to-[#40798C]
        w-[90%] sm:w-[80%] md:w-[70%]
        rounded-xl overflow-hidden
        flex flex-col
        h-100
      "
    >
      <div className="myCard_topContainer w-full h-40 sm:h-48 md:h-56 relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="cardImg object-cover"
        />
      </div>

      <div className="myCard_bottomContainer p-4 flex flex-col gap-10">
        <p className="caption1 pt-15">{title}</p>
        <div className="myCard_buttonContainer">
          <Link href={link} target="_blank" rel="noopener noreferrer"><Button text="View Project" /></Link>
        </div>
      </div>
    </div>
  );
}
