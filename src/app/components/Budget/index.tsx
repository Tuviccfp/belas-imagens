"use client"
import Image from "next/image"
import bg from '../../background.png'
import { ArrowFatLeft, ArrowFatRight, ChatText } from "@phosphor-icons/react"
import { forwardRef } from "react"

const Budget = forwardRef<HTMLBodyElement>((props, ref) => {
    return (
        <section ref={ref}>
            <article className="relative">
                <Image src={bg} alt="" style={{width: "100vw", height: 300}}/>
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <ArrowFatRight color="#4ea6f2" weight="fill"/>
                    <p className="lg:m-2 uppercase">Peça agora mesmo seu orçamento!</p>
                    <ArrowFatLeft color="#4ea6f2" weight="fill"/>
                </div>
                <button className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#1e73be] p-2 rounded" type="button"><ChatText size={16}/> Solicitar</button>
            </article>
        </section>
    ) 
});

Budget.displayName = "Budget"
export default Budget