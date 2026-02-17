import Image from "next/image";
import Button from "./components/Button"
import ProjectCard from "./components/ProjectCard"
import TeaCozyImage from "../public/teacozy.png"
import OurBloomsImage from "../public/ourblooms.png"
import ChoHanImage from "../public/chohan.png"
import DecentPurchasesImage from "../public/decentpurchases.png"
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-around  pt-16 px-10">
        <div>
          <p className="heading1 text-5xl text-center">Welcome, <br /> my name is Mateus.</p>
        </div>
        <div className="mt-30 lg:mt-10">
          <Image className=" rounded-full animate-bounce"
          src="/pfp-desktop.png" 
          alt="mateus' image" 
          width={300} 
          height={300} />
        </div>
      </div>
      
      <div className="flex justify-center mb-10">
        <p className="heading2 text-center">Browse my Projects</p>
      </div>
      
      <div className="grid lg:grid-cols-2 place-items-center gap-10">
        <ProjectCard src={TeaCozyImage} alt="Tea Cozy project" title="TeaCozy" link="https://tea-cozy.netlify.app/"/>
        <ProjectCard src={OurBloomsImage} alt="Our Blooms project" title="OurBlooms" link="https://ourblooms-ms.netlify.app/"/>
        <ProjectCard src={ChoHanImage} alt="Cho Han project" title="ChoHan" link="https://codehs.com/sandbox/id/116-cho-han-game-nZi0iB/run"/>
        <ProjectCard src={DecentPurchasesImage} alt="Decent Purchases project" title="DecentPurchases" link="https://codehs.com/sandbox/id/104-decent-purchases-mWpACW/run"/>
      </div>
    </div>
  );
}