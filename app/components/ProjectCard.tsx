import Button from "./Button"
import Image from "next/image"; 

export default function ProjectCard({src, alt, title}:{src:string, alt:string, title:string}) {

    return(
        <div className="myCard">
            <div className="myCard_topContainer">
                <Image className="cardImg"
                src={src}
                alt={alt}
                width={403}
                height={269}
                />
            </div>
            <div className="myCard_bottomContainer">
                <div className="caption1">{title}</div>
                <div className="myCard_buttonContainer"><Button text="View Project" /></div>
            </div>
        </div>
    )
}