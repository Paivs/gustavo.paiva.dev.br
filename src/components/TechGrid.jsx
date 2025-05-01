"use client";

import { useTheme } from "next-themes";
import { FaReact, FaAngular, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiSolidity, SiPolygon, SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";

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
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const bgOuter = isDark ? "bg-[#0F172A]" : "bg-[#f8fafc]";
  const bgInner = isDark ? "bg-[#0F0F1A]" : "bg-black";
  const cardBg = isDark ? "bg-[#0F172A]" : "bg-[#f1f5f9]";
  const textColor = isDark ? "text-[#C27AFF]" : "text-[#7e22ce]";

  return (
    <div className={`flex items-center justify-center py-6 transition-colors`}>
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ${bgInner} p-6 rounded-2xl transition-colors`}>
        {techs.map((tech) => (
          <div
            key={tech.name}
            className={`flex flex-col items-center justify-center text-center ${cardBg} p-4 rounded-xl hover:scale-105 transition transform cursor-pointer`}
          >
            <div className={`${textColor}`}>{tech.icon}</div>
            <p className={`${textColor} mt-2 font-semibold`}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
