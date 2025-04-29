import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      {/* home */}
      <div
        id="sobremim"
        className="flex item-center justify-center gap-2 min-h-screen w-full p-6"
      >
        sobre mim
      </div>

      {/* projetos */}
      <div
        id="projetos"
        className="container mx-auto flex flex-col item-start justify-start gap-4 min-h-screen w-full overflow-x-auto"
      >
        <h2 className="text-2xl font-bold">Projetos</h2>

        <div className="flex gap-4 overflow-x-auto p-4">
          <Card
            title={"GIFT-U"}
            description={"Presentes digitais, personalizados — do seu jeito, para quem importa."}
            imagem={"/gift-u.png"}
          />

          <Card
            title={"Lizst"}
            description={"Aplicativo mobile para conectar os dados do paciente diretamento com o psicoterapeuta."}
            imagem={"/gift-u.png"}
          />

          <Card
            title={"ArchDoc"}
            description={"Aplicativo desktop para gerenciar versões de documentos em geral."}
            imagem={"/gift-u.png"}
          />

          <Card
            title={"Lista de Presente"}
            description={"Site para criar e gerenciar sua lista de presentes."}
            imagem={"/gift-u.png"}
          />
        </div>
      </div>

      {/* contato */}
      <div
        id="contato"
        className="flex item-center justify-center gap-2 min-h-screen w-full"
      >
        contato
      </div>
    </>
  );
}
