import Image from "next/image";
import Button from "./components/Button"
import ProjectCard from "./components/ProjectCard"
import TeaCozyImage from "../public/teacozy.png"
import OurBloomsImage from "../public/ourblooms.png"
import ChoHanImage from "../public/chohan.png"
import DecentPurchasesImage from "../public/decentpurchases.png"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-around  pt-16 px-10">
        <div>
          <p className="heading1 text-5xl">Welcome, my name is Mateus.</p>
        </div>
        <div className="mt-30 lg:mt-10">
          {/* i want to incorporate a button that makes the image stop bouncing and starts spinning; i want the user to be able to interract with my site by having the ability to switch animations.*/}
          <Image className=" rounded-full animate-bounce"
          src="/pfp-desktop.png" 
          alt="mateus' image" 
          width={300} 
          height={300} />
        </div>
      </div>
      
      <div className="flex justify-center mb-10">
        <p className="heading2">Browse my Projects</p>
      </div>
      
      <div className="grid lg:grid-cols-2 place-items-center gap-10">
        <ProjectCard src={TeaCozyImage} alt="Tea Cozy project" title="TeaCozy"/>
        <ProjectCard src={OurBloomsImage} alt="Our Blooms project" title="OurBlooms"/>
        <ProjectCard src={ChoHanImage} alt="Tea Cozy project" title="TeaCozy"/>
        <ProjectCard src={DecentPurchasesImage} alt="Tea Cozy project" title="TeaCozy"/>
      </div>

      
    </div>
  );
}
