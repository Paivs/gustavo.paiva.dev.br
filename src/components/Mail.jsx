"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function Mail() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  
    toast("Enviando mensagem...");
  
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, mensagem }),
      });
  
      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
        setNome("");
        setMensagem("");
      } else {
        toast.error("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Erro ao enviar mensagem.");
    }
  }
  
  

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full md:w-1/2"
    >
      <input
        type="text"
        placeholder="Seu nome / empresa"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="bg-[#1f1f2e] text-gray-300 text-sm px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
        required
      />

      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        className="bg-[#1f1f2e] text-gray-300 text-sm px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
        required
        rows={4}
      />

      <motion.button
        type="submit"
        className="bg-[#6b6b8d] text-gray-300 text-sm px-4 py-2 rounded-lg"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.95 }}
      >
        Enviar
      </motion.button>
    </form>
  );
}
