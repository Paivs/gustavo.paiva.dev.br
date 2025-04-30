"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Card({
  title,
  description,
  href,
  image,
  tags,
  id,
  remoto = "",
}) {
  return (
    <motion.div
      id={id}
      className="rounded-xl overflow-hidden shadow-lg bg-[#0f0f1a] border border-gray-800 w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      
        <div className="relative">
          <img src={image} alt={title} className="w-full h-72 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          </div>
        </div>

        <div className="p-4">
          <p className="text-gray-300 text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#1f1f2e] text-gray-300 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href={href} className="text-purple-400 text-sm font-medium hover:underline flex items-center gap-1 pe-1 py-2 mb-1">
            Ver Detalhes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          {remoto !== "" && (
            <Link href={remoto} className="text-[#6B6B8D] text-sm font-medium hover:underline flex items-center gap-1 pe-1 py-2">
              Acessar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
    </motion.div>
  );
}
