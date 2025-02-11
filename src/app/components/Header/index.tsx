"use client"
import Image from "next/image"
import logo from '../../logo-belasimagens-1.png';
import { forwardRef, useState } from 'react';
import { List, X } from "@phosphor-icons/react";
import './menu-mobile.css'

interface HeaderProps {
    logoRef: React.RefObject<HTMLImageElement | null>;
    refs: {
        about: React.RefObject<HTMLBodyElement | null>;
        budget: React.RefObject<HTMLBodyElement | null>;
        services: React.RefObject<HTMLBodyElement | null>;
        whatsapp: React.RefObject<HTMLBodyElement | null>;
        contato: React.RefObject<HTMLBodyElement | null>;
    };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = forwardRef<never, HeaderProps>(({ logoRef, refs }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const modifyIcon = () => {
        if(isMenuOpen) {
            return <X size={32} color="#4ea6f2"/>
        } 
        return <List size={32} color="#4ea6f2"/>
    }
    const scrollTo = (targetRef: React.RefObject<HTMLBodyElement | null>) => {
        if(targetRef.current) {
            targetRef.current.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-1/2">

            </div>
            <div className="flex w-1/2">
                <Image ref={logoRef} src={logo} alt="" className={`${isMenuOpen ? "md:fixed md:top-0" : ""} w-36 h-36`} />
                <button type="button" onClick={toggleMenu} className="md:hidden">
                    {modifyIcon()}
                </button>
                <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex gap-5 scroll-smooth' style={{color: '#4ea6f2'}}>
                        <li>Home</li>
                        <button type="button" onClick={() => scrollTo(refs.about)}>
                            <li>Sobre Nós</li>
                        </button>
                        <button type="button" onClick={() => scrollTo(refs.budget)}>
                            <li>Orçamento</li>
                        </button>
                        <button type="button" onClick={() => scrollTo(refs.services)}>
                            <li>Serviços</li>
                        </button>
                        <button type="button" onClick={() => scrollTo(refs.whatsapp)}>
                            <li>Whatsapp</li>
                        </button>
                        <button type="button" onClick={() => scrollTo(refs.contato)}>
                            <li>Contato</li>
                        </button>
                    </ul>
                </nav>
            </div>
            <div className="w-1/2">

            </div>
        </div>
    )
})

Header.displayName = 'Header';

export default Header
