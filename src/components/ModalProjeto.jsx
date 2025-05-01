import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ModalProjeto({ isOpen, onClose, projeto }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0F172A]/50 flex items-center justify-center px-4 overflow-y-auto">
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl w-full max-w-3xl md:max-w-screen p-4 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Botão fechar */}
          <motion.button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl z-10"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
          >
            &times;
          </motion.button>

          {/* Conteúdo */}
          <div className="flex flex-col md:flex-row gap-6 pt-6 md:pt-0">
            <div className="w-full md:w-1/2">
              <img
                src={projeto.image}
                alt="Preview do projeto"
                className="rounded-xl border border-gray-300 dark:border-gray-700 w-full h-auto"
              />
            </div>

            <div className="flex-1 md:w-1/2">
              <div className="w-full flex flex-row items-center justify-between gap-2">
                <h2 className="text-2xl font-bold mb-2">{projeto.title}</h2>
                <span className="text-sm">{projeto.data}</span>
              </div>

              <p className="mb-4 text-sm">{projeto.descriptionFull}</p>

              <p className="text-sm font-medium mb-1">Tecnologias:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projeto.tags.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {projeto.link !== "indisponivel" && (
                  <Link
                    href={projeto.link}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    Acessar projeto
                  </Link>
                )}

                {projeto.github === "privado" ? (
                  <button
                    className="text-gray-600 underline"
                    type="button"
                    onClick={() => toast.error("Projeto privado")}
                  >
                    Código privado
                  </button>
                ) : (
                  <Link
                    href={projeto.github}
                    target="_blank"
                    className="text-gray-600 underline"
                  >
                    Ver código
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
