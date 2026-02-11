import Image from "next/image";
import Button from "./components/Button"
import ProjectCard from "./components/ProjectCard"
import TeaCozyImage from "../public/teacozy.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900  to-green-900 font-montserrat">
      <div className="flex items-center justify-between px-2 py-5 font-montserrat">
        <p>M.S.</p>
        <ul className="flex gap-6">
          <li className="">About Me</li>
          <li>|</li>
          <li>Contact Me</li>
        </ul>
      </div>

      <div className="flex flex-row items-center justify-around pt-16">
        <div>
          <p className="text-5xl">Welcome, my name is Mateus.</p>
        </div>
        <div className="border">
          <Image className="border-80 border-black border-solid rounded-full animate-spin"
          src="/pfp-desktop.png" 
          alt="mateus' image" 
          width={300} 
          height={300} />
        </div>
      </div>
      
      <ProjectCard src={TeaCozyImage} alt="Tea Cozy project" title="TeaCozy"/>
    </div>
  );
}
