"use client";
import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react";
import { forwardRef } from "react";

const AboutUs = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full sm:w-[30px] lg:w-auto">
      <article >
        <div
          className="flex items-center justify-center"
          style={{ color: "#4ea6f2" }}
        >
          <ArrowFatRight weight="fill" />
          <h4 className="m-2 text-2xl uppercase text-white"><b>Sobre Nós</b></h4>
          <ArrowFatLeft weight="fill" />
        </div>
        <div className="text-white p-5 leading-[2] lg:w-[823px] lg:relative lg:right-[25%] lg:left-[25%] lg:text-sm sm:w-[200px]">
          A empresa <u>Belas Imagens</u> atua na produção de imagens aéreas
          fotográficas e de filmagens com propósito de trazer ao seu cliente
          soluções para questões logísticas e comemorativas. Trazemos o que
          existe de mais moderno no setor com excelente qualidade aliado ao
          nosso comprometimento e profissionalismo.
          <br />
          <br />
          Todos os <strong>Drones</strong> da <u>Belas Imagens</u> têm recursos para a realização de
          trabalhos excelentes com filmagens realizadas em até 4K, câmera lenta
          120fps e fotografias em até 12MP.
        </div>
      </article>
    </section>
  )
});

AboutUs.displayName = "AboutUs"
export default AboutUs