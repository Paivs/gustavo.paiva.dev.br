import Card from "@/components/Card";
import Links from "@/components/Links";
import Mail from "@/components/Mail";

import Typewritter from "@/components/Typewritter";
import TechGrid from "@/components/TechGrid";
import Link from "next/link";
import { GitHub } from "@mui/icons-material";
import Curriculo from "@/components/Curriculo";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  const projects = [
    {
      id: "gift-u",
      title: "GIFT-U",
      data: "11/2024",
      description:
        "Presentes digitais, personalizados — do seu jeito, para quem importa.",
      descriptionFull: "O GIFT-U é uma plataforma web de presentes digitais personalizados, criada para transformar o jeito de presentear. Com ele, qualquer pessoa pode montar um site exclusivo com mensagens, fotos, vídeos, músicas e muito mais — tudo pensado para quem vai receber. O projeto foi desenvolvido com foco em performance, escalabilidade e experiência do usuário, utilizando tecnologias modernas como Next.js, Node.js, MongoDB e Tailwind CSS. O deploy é feito com Docker e gerenciado via Coolify, com monitoramento por Umami. Ideal para datas especiais, o GIFT-U torna a experiência de presentear mais memorável e criativa.",
      github: "privado",
      image: "/gift-u.png",
      href: "/projetos/gift-u",
      remoto: "https://gift-u.app/",
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Docker",
        "Coolify",
        "Umami",
      ],
    },
    {
      id: "liszt",
      title: "Liszt",
      data: "08/2023",
      description:
        "Aplicativo mobile para conectar os dados do paciente diretamente com o psicoterapeuta.",
      descriptionFull: "O Liszt é um aplicativo mobile desenvolvido para facilitar a conexão entre pacientes e psicoterapeutas. A plataforma permite o registro e compartilhamento de dados clínicos, diário de sonhos, lembretes, proporcionando um acompanhamento mais preciso e contínuo. Pensado para melhorar a comunicação e o engajamento no tratamento, o app utiliza React Native no front-end e uma API robusta em Java com Spring Boot no back-end, com persistência dos dados em um banco MySQL. O Liszt entrega uma experiência segura, intuitiva e centrada no cuidado com a saúde mental.",
      github: "https://github.com/Paivs/Thelma_Armidoro_React-App",
      image: "/lizst.png",
      video: "/lizst_video.mp4",
      remoto: "indisponivel",
      href: "/projetos/lizst",
      tags: ["React-Native", "Java", "Spring Boot", "MySQL"],
    },
    {
      id: "archdoc",
      title: "ArchDoc",
      data: "11/2022",
      description:
        "Aplicativo desktop para gerenciar versões de documentos em geral.",
      descriptionFull: "Durante minha experiência com desenvolvimento de software industrial, enfrentava um alto volume de documentos técnicos e suas respectivas revisões. Organizar e garantir que todos estavam atualizados consumia horas preciosas antes mesmo de iniciar o trabalho real. O ArchDoc foi criado para resolver exatamente esse problema: uma aplicação desktop desenvolvida em Java Swing, com banco de dados MySQL, que permite gerenciar versões de documentos de forma prática e eficiente. Ideal para profissionais que lidam com documentação técnica, o ArchDoc centraliza, organiza e agiliza todo o processo.", 
      github: "https://github.com/Paivs/ArchDoc",
      remoto: "indisponivel",
      image: "/archdoc.png",
      href: "/projetos/archdoc",
      tags: ["Swing", "Java", "MySQL"],
    },
    {
      id: "lista-de-presentes",
      title: "Lista de Presente",
      data: "02/2025",
      remoto: "https://livs-e-gu.com.br/",
      description:
        "Crie e gerencie chás e listas de presentes, recebendo o dinheiro e/ou produtos diretamente!",
      descriptionFull: 'O projeto "Lista de Presente" foi criado para facilitar a organização de chás de bebê, casamentos, aniversários e outros eventos comemorativos. Outras opções no mercado tem uma taxa alta. A plataforma permite que os anfitriões criem listas de presentes personalizadas e escolham se desejam receber os itens fisicamente ou o valor em dinheiro direto em conta. Com uma interface moderna e intuitiva, desenvolvida com Next.js e estilizada com Tailwind CSS, o sistema conta com back-end estruturado em Docker, banco de dados relacional MySQL e deploy gerenciado via Coolify. Uma solução prática para quem quer celebrar com mais liberdade e controle.',
      github: "privado",
      image: "/livs-e-gu.com.br.png",
      href: "/projetos/lista-de-presente",
      tags: ["Next", "Tailwind CSS", "MongoDB", "MySQL", "Docker", "Coolify"],
    },
  ];

  await sleep(1500);

  return (
    <>
      {/* home */}
      <section         id="sobremim"         className="container mx-auto flex flex-col md:flex-row justify-center gap-2 min-h-[93vh] w-full p-6 my-12"
      >
        <div className="flex flex-col items-start justify-center gap-2 w-full md:w-1/2">
          {/* <h2 className="text-4xl font-bold">Sobre mim</h2> */}

          <div className="text-start w-full text-xl md:text-3xl min-h-24">
            <Typewritter />
          </div>

          <p className="text-sm md:text-lg">
            Profissional certificado com experiência em desenvolvimento de
            sistemas e administração de redes Windows/Linux. Hoje, atuo com
            práticas DevOps, focando em CI/CD, conteinerização com Docker e
            deploys automatizados em cloud. Tenho forte habilidade em
            troubleshooting, otimização de pipelines e entrega contínua de forma
            escalável e com qualidade.
          </p>

          <TechGrid />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full flex items-center justify-center">
              <img
                src="/ilustracao.png"
                alt=""
                className="hidden md:block w-2/3 h-auto rounded-xl"
              />
            </div>

            {/* <p className="text-sm text-gray-400">Acesse também:</p> */}

            <div className="flex space-x-4">
              <Link
                href="#projetos"
                className=" flex flex-col items-center justify-center px-4 py-2 bg-[#6B6B8D] text-white rounded-lg hover:bg-purple-700 transition"
              >
                Projetos
              </Link>
              <Link
                href="https://github.com/paivs"
                target="_blank"
                className=" flex flex-col items-center justify-center px-4 py-2 bg-[#6B6B8D] text-white rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </Link>

              <Curriculo/>
              
            </div>
          </div>
        </div>
      </section>

      {/* projetos */}
      <section         id="projetos"         className="container mx-auto flex flex-col justify-start gap-4 min-h-[93vh] w-full overflow-visible p-6 lg:px-0  my-12"
      >
        <h2 className="text-4xl font-bold">Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4 overflow-visible">
          {projects.map((project, index) => (
            <Card
              id={project.id}
              key={index}
              title={project.title}
              description={project.description}
              descriptionFull={project.descriptionFull}
              data={project.data}
              github={project.github}
              image={project.image}
              video={project.video} 
              href={project.href}
              tags={project.tags}
              remoto={project.remoto}
            />
          ))}
        </div>
      </section>

      {/* contato */}
      <section         id="contato"         className="flex flex-col-reverse md:flex-row justify-center gap-12 md:gap-2 min-h-[93vh] w-full p-6 md:p-0  my-12"
      >
        <div className="flex flex-col w-full gap-6 md:w-1/2 items-center justify-center">
          <h2 className="text-4xl font-bold text-start">
            Minhas redes e contatos
          </h2>

          <Links />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4">
          <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-4xl font-bold">Vamos desenvolver juntos!</h2>
            <p className="text-lg text-center">
              Entre em contato pelos links ao lado, ou mande um e-mail
              diretamente.
            </p>
          </div>

          <Mail />
        </div>
      </section>
    </>
  );
}
