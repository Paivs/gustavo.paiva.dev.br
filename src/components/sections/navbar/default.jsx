import Navigation from "../../ui/navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import LaunchUI from "../../logos/launch-ui";
import { cn } from "@/lib/utils";

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Link from "next/link";

export default function Navbar({
  logo = <LaunchUI />,
  name = "Gustavo Paiva",
  homeUrl = "https://gustavo-paiva.dev.br",

  mobileLinks = [
    {
      text: "Sobre mim",
      href: "/#contato",
    },
    {
      text: "Projetos",
      href: "/#projetos",
    },
    {
      text: "Contato",
      href: "/#contato",
    },
  ],

  actions = [
    // { text: "Sign in", href: "https://gustavo-paiva.dev.br", isButton: false },
    // {
    //   text: "Get Started",
    //   href: "https://gustavo-paiva.dev.br",
    //   isButton: true,
    //   variant: "default",
    // },
  ],

  showNavigation = true,
  customNavigation,
  className
}) {
  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div
        className="fade-bottom absolute left-0 h-24 w-full"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft className={""}>
            <Link href={"/"} className="absolute items-center gap-2 text-xl font-bold">
              {logo}
              {/* {name} */}
            </Link>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight>
            <ThemeSwitcher/>
            {actions.map((action, index) =>
              action.isButton ? (
                <Button key={index} variant={action.variant || "default"} asChild>
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a key={index} href={action.href} className="hidden text-sm md:block">
                  {action.text}
                </a>
              ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <MenuIcon/>
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
