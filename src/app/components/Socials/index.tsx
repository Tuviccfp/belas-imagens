"use client"
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";

export default function Socials() {
    return (
        <div className="fixed right-0 top-1/2 m-2">
            <ul className="flex flex-col gap-2">
                <a href="#">
                    <li className="bg-white rounded border border-white">
                            <FacebookLogo size={30} color="#1e73be"/>
                    </li>
                </a>
                <a href="https://www.youtube.com/channel/UCv58LgtcQzaGPXJk1BC_MRA">
                    <li className="bg-white rounded border border-white">
                            <YoutubeLogo size={30} color="#1e73be"/>
                    </li>
                </a>
                <a href="https://www.instagram.com/belasimagens.br/">
                    <li className="bg-white rounded border border-white cursor-pointer">
                        <InstagramLogo size={30} color="#1e73be"/>
                    </li>
                </a>
            </ul>


        </div>
    )
}