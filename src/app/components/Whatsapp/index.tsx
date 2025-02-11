"use client"
import Image from "next/image";
import bg from '../../background.png';
import { ArrowFatLeft, ArrowFatRight, WhatsappLogo } from "@phosphor-icons/react";
import { forwardRef } from "react";

const Whatsapp = forwardRef<HTMLBodyElement>((props, ref) => {
    return (
        <section ref={ref}>
            <article className="relative">
                <Image src={bg} alt="" className="w-full h-[300px]" />
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <ArrowFatRight color="#4ea6f2" weight="fill"/>
                    <p className="lg:m-2 uppercase font-semibold lg:text-2xl sm:text-2xl">Se preferir, contate-nos pelo whatsapp!</p>
                    <ArrowFatLeft color="#4ea6f2" weight="fill"/>
                </div>
                <a href="https://wa.me/5521999683004">
                    <button className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#1e73be] p-2 rounded" type="button"><WhatsappLogo size={20}/>Contate-nos</button>
                </a>
            </article>
        </section>
    )
});

Whatsapp.displayName = "Whatsapp"
export default Whatsapp