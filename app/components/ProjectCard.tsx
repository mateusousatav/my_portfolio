import Button from "./Button"
import Image from "next/image"; 

export default function ProjectCard({src, alt, title}:{src:string, alt:string, title:string}) {

    return(
        <div className="myCard">
            <Image
            src={src}
            alt={alt}
            width={403}
            height={269}
            />
            <div className="myCard_bottomContainer">
                <div>{title}</div>
                <div className="myCard_buttonContainer"><Button text="View Project" /></div>
            </div>
        </div>
    )
}