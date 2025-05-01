"use client";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Links() {
  return (
    <ul className="flex flex-col items-start justify-center gap-4 text-center">
    <li>
      <Link href="https://www.linkedin.com/in/gustavopaiva/">
        <LinkedInIcon /> linkedin.com/in/gustavo-paiva-7053a6210/
      </Link>
    </li>

    <li>
      <Link href="mailto:gustavo.paiva.gp1@gmail.com?subject=Entrando em contato pelo site">
        <AlternateEmailIcon /> gustavo.paiva.gp1@gmail.com
      </Link>
    </li>

    <li>
      <Link href="https://github.com/Paivs">
        <GitHubIcon /> github.com/Paivs
      </Link>
    </li>

    <li>
      <Link href="https://github.com/Paivs">
        <WhatsAppIcon /> +55 11 98069-7346
      </Link>
    </li>
  </ul>
  );
}