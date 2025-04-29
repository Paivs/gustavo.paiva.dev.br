"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Card({ imagem, title, description, href }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={handleClick}
        className="w-96 rounded-[20px] p-3 flex flex-col items-start justify-start gap-4 bg-accent cursor-pointer hover:bg-accent transition-all duration-300 h-[400px]"
      >
        <img
          src={imagem}
          alt={title}
          className="w-full h-auto rounded-[23px] min-h-[250px] max-h-[300px] object-cover object-center border-2 border-b-slate-500"
        />
        <div className="flex flex-col items-start justify-start gap-1 text-start">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-md text-start">{description}</p>
        </div>
      </motion.button>
    </>
  );
}
