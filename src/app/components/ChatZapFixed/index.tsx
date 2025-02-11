"use client"

import { WhatsappLogo } from "@phosphor-icons/react"

export default function ChatZapFixed() {
    return (
        <a href="https://wa.me/5521999683004">
            <div className="fixed right-0 bottom-0 m-2">
                <button type="button" className="bg-gray-400 flex items-center justify-center gap-2 text-black p-2 rounded-2xl">
                    <WhatsappLogo size={24} color="black"/> Como posso te ajudar?
                </button>
            </div>
        </a>
    )
}