"use client";
import {
  ArrowFatLeft,
  ArrowFatRight,
  Trophy,
  House,
  Clipboard,
  Truck,
  GitBranch,
  Image,
} from "@phosphor-icons/react";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: <Trophy size={35} weight="fill" />,
    title: "Eventos Esportivos",
    text: "Filmagens e fotografias aéreas de eventos e práticas esportivas com imagens sensacionais.",
  },
  {
    id: 2,
    icon: <House size={35} weight="fill" />,
    title: "Setor imobiliário",
    text: "Filmagens aéreas internas e externas de seu emprendimento imobiliário.",
  },
  {
    id: 3,
    icon: <Clipboard size={35} weight="fill" />,
    title: "Inspeções técnicas",
    text: "Fazemos as imagens e fotografias aéreas de estruturas para inspeções técnicas.",
  },
  {
    id: 4,
    icon: <Truck size={35} weight="fill" />,
    title: "Setor Industrial",
    text:
      "Trabalhamos com filmagens e fotografias aéreas em indústrias:" +
      "galpões, áreas externas e estruturas diversas.",
  },
  {
    id: 5,
    icon: <GitBranch size={35} weight="fill" />,
    title: "Mapeamento aéreo 3D",
    text: "Trabalhamos com mapeamento 3D em diferentes estruturas.",
  },
  {
    id: 6,
    // eslint-disable-next-line jsx-a11y/alt-text
    icon: <Image size={35} weight="fill" />,
    title: "Propaganda, edição e finalização",
    text:
      "Entregamos o nosso trabalho completo:" +
      "filmagens e fotografias aéreas editadas e finalizadas",
  },
];

const Services = forwardRef<HTMLBodyElement>((props, ref) => {
  return (
    <section ref={ref} className="m-2">
      <article>
        <div className="flex items-center justify-center gap-2 m-2">
          <ArrowFatRight color="#4ea6f2" weight="fill" />
          <p className="m-1 text-2xl uppercase font-semibold tracking-wide">
            Serviços
          </p>
          <ArrowFatLeft color="#4ea6f2" weight="fill" />
        </div>

        <div>
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:grid lg:grid-cols-3 lg:items-center lg:justify-center gap-6"
          >
            {services.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 * 0.2, duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center mb-3"
              >
                <div className="rounded-xl bg-white w-16 h-16 flex items-center justify-center  text-[#1e73be] hover:bg-[#1e73be] hover:text-white">
                    {item.icon}
                </div>
                <h4 className="text-[#1e73be] font-bold m-1 tracking-wide">
                    {item.title}
                </h4>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </article>
    </section>
  );
});
Services.displayName = "Services";
export default Services;
