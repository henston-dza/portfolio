import React from "react";

import { SiMysql, SiMongodb, SiPostgresql, SiOracle, SiMariadb } from "react-icons/si";
import { GlareCard } from "../ui/glare-card";
import { FaDatabase } from "react-icons/fa";
function Databases() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <FaDatabase className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Convex</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiPostgresql className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">PostgreSQL</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiOracle className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Oracle</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiMariadb className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">MariaDB</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiMysql className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">MySQL</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiMongodb className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">MongoDB</p>
      </GlareCard>


    </div>
  );
}

export default Databases;
