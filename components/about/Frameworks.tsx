import React from "react";
import { DiReact, DiNodejs } from "react-icons/di";
import { SiExpress, SiFastapi, SiEthers } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GlareCard } from "../ui/glare-card";
function Frameworks() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <SiFastapi className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">FastAPI</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiEthers className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Ethers.js</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <RiNextjsFill className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Nextjs</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <DiNodejs className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Nodejs</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiExpress className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Express</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <RiTailwindCssFill className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Tailwind</p>
      </GlareCard>
    </div>
  );
}

export default Frameworks;
