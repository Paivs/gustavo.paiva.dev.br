"use client";

import { FaReact, FaAngular, FaNodeJs, FaJava, FaSQL } from "react-icons/fa";
import { SiMongodb, SiSass, SiTypescript, SiSolidity, SiPolygon } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";

const techs = [
  { name: "Java", icon: <FaJava size={30} /> },
  { name: "Next", icon: <RiNextjsFill size={30} /> },
  { name: "Angular", icon: <FaAngular size={30} /> },
  { name: "React", icon: <FaReact size={30} /> },
  { name: "Spring Boot", icon: <SiSpring size={30} /> },
  { name: "Node", icon: <FaNodeJs size={30} /> },
  { name: "MySQL", icon: <GrMysql size={30} /> },
  { name: "MongoDB", icon: <SiMongodb size={30} /> },
];

export default function TechGrid() {
  return (
    <div className="flex items-center justify-center bg-[#0F172A] py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-[#0F0F1A] p-6 rounded-2xl">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center text-center bg-[#0F172A] p-4 rounded-xl hover:scale-105 transition transform cursor-pointer"
          >
            <div className="text-[#C27AFF]">{tech.icon}</div>
            <p className="text-[#C27AFF] mt-2 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
