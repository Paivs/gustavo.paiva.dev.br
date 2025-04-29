"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import LaunchUI from "../logos/launch-ui";

import { useRouter } from 'next/navigation'

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Navigation({
  menuItems = [
    {
      title: "Sobre mim",
      isLink: true,
      href: "/#sobremim",
    },
    {
      title: "Projetos",
      content: "components",
    },
    {
      title: "Contato",
      content: "redes",
    },
  ],

  components = [
    {
      title: "Gift-U",
      href: "/#gift-u",
      description:
        "Uma nova forma de presentar! SaaS em Next.JS e Spring Boot para criar sites-presentes",
    },
    {
      title: "Lizst",
      href: "/#liszt",
      description:
        "Plataforma de conexão entre paciente e psicoterapeutas. Feito em React-Native e Spring Boot.",
    },
    {
      title: "ArchDoc",
      href: "/#archdoc",
      description:
        "Versionador de documentos baseado em nome. Feito em Java e MySQL",
    },
    {
      title: "Lista de Presentes",
      href: "/#lista",
      description:
        "Ambiente para gerenciar os presentes, presença e informações de festas.",
    },
  ],

  redes = [
    {
      title: "Linkedin",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/gustavo-paiva-7053a6210/",
    },
    {
      title: "GitHub",
      icon: "github",
      href: "https://github.com/Paivs",
    },
    {
      title: "E-mail",
      icon: "mail",
      href: "mailto:gustavo.paiva.gp1@gmail.com?subject=Entrando em contato pelo site",
    },
    {
      title: "Celular/WhatsApp",
      icon: "phone",
      href: "https://wa.me/5511980697346?text=Ol%C3%A1%2C%20entrando%20em%20contato%20pelo%20site%21",
    },
  ],

  logo = <LaunchUI />,
  logoTitle = "GP",
  logoDescription = "Gustavo Paiva, desenvolvedor full-stack",
  logoHref = "https://gustavo-paiva.dev.br",

  introItems = [
    {
      title: "Introduction",
      href: "https://gustavo-paiva.dev.br",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Installation",
      href: "https://gustavo-paiva.dev.br",
      description: "How to install dependencies and structure your app.",
    },
    {
      title: "Typography",
      href: "https://gustavo-paiva.dev.br",
      description: "Styles for headings, paragraphs, lists...etc",
    },
  ],
}) {

  const router = useRouter()

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  router.push(item.href || "");
                }}
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </button>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className={"mx-auto "}>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "redes" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {redes.map((redes) => (
                        <ListItem
                          key={redes.title}
                          title={redes.title}
                          href={redes.href}
                          className={
                            "flex flex-row gap-2 item-center text-center"
                          }
                        >
                          {redes.icon === "linkedin" && <LinkedInIcon />}
                          {redes.icon === "mail" && <AlternateEmailIcon />}
                          {redes.icon === "github" && <GitHubIcon />}
                          {redes.icon === "phone" && <WhatsAppIcon />}

                          {redes.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content && (
                      <>
                        <ListItem
                          title={redes.title}
                          href={redes.href}
                          className={
                            "flex flex-row gap-2 item-center text-center"
                          }
                        >
                          {title}
                        </ListItem>
                      </>
                    )
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ className, title, children, ...props }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground  text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
