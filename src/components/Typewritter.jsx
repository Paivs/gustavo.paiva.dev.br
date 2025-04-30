"use client";

import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function Typewritter() {
  useEffect(() => {
    let app = document.getElementById("frase");

    let typewriter = new Typewriter(app, {
      delay: 70,
    });

    typewriter
      .pauseFor(1000)
      .typeString(
        "Prazer, me chamo <strong>Gustavo Paiva</strong> e <br/> sou desenvolvedor fullstack"
      )
      .pauseFor(250)
      .deleteChars(9)
      .typeString(
        'Next.JS e React'
      )
      .pauseFor(750)
      .deleteChars(15)
      .typeString(
        'Java com Spring Boot'
      )
      .pauseFor(750)
      .deleteChars(21)
      .typeString(
        '.'
      )

      .start();
  }, []);

  return <span id="frase"></span>;
}
