"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ModalProjeto from "./ModalProjeto";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Card({
  title,
  description,
  descriptionFull,
  github,
  href,
  image,
  tags,
  data,
  id,
  remoto = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const bgCard = isDark ? "bg-[#0f0f1a]" : "bg-white";
  const borderCard = isDark ? "border-gray-800" : "border-gray-300";
  const textPrimary = isDark ? "text-white" : "text-gray-800";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-600";
  const tagBg = isDark ? "bg-[#1f1f2e]" : "bg-gray-200";
  const tagText = isDark ? "text-gray-300" : "text-gray-800";

  return (
    <>
      <ModalProjeto
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        projeto={{
          title,
          descriptionFull,
          link: remoto,
          image,
          tags,
          github,
          data,
        }}
      />

      <motion.div
        id={id}
        className={`rounded-xl overflow-hidden shadow-lg ${bgCard} border ${borderCard} w-full`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 md:h-72 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className={`text-lg font-semibold ${textPrimary}`}>{title}</h3>
          </div>
        </div>

        <div className="p-4">
          <p className={`text-sm mb-4 ${textSecondary}`}>{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-3 py-1 rounded-full ${tagBg} ${tagText}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              umami.track('projeto ' + title)
              setIsOpen(true)
            }}
            className="text-purple-500 text-sm font-medium hover:underline flex items-center gap-1 pe-1 py-2 mb-1"
          >
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
          </button>
          {remoto !== "indisponivel" && (
            <Link
              href={remoto}
              className="text-blue-400 text-sm font-medium hover:underline flex items-center gap-1 pe-1 py-2"
            >
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
    </>
  );
}
