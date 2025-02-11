"use client"

import { ArrowUp } from "@phosphor-icons/react"
import { forwardRef } from "react"

const Footer = forwardRef<HTMLImageElement>((props, ref) => {
    const scrollToHome = () => {
        if (ref && typeof ref === 'object' && ref.current) {
            ref.current.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <footer className="relative flex flex-col items-center justify-center p-5 bg-gray-800">
            <button type="button" className="absolute top-[-30] bg-white p-2 m-4" onClick={scrollToHome}>
                <ArrowUp size={30} color="black"/>
            </button>
            <div className="text-center mt-4 leading-[2] p-4 w-full mb-4">
                Copyright 2025 | Todos os direitos reservados | É proibido a reprodução total ou parcial do conteúdo deste site sem autorização expressa por escrito
                <br/>
                Desenvolvido por: <a href="https://github.com/Tuviccfp">Victor Cordeiro Fraguas Pires</a>
            </div>
        </footer>
    )
});

Footer.displayName = "Footer"
export default Footer;