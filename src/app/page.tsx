"use client"
import { useRef } from "react";
import AboutUs from "./components/About";
import Budget from "./components/Budget";
import ChatZapFixed from "./components/ChatZapFixed";
// import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scanner from "./components/Scanner";
import Services from "./components/Services";
import Socials from "./components/Socials";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
  const refHome = useRef<HTMLImageElement>(null);
  
  const refAbout = useRef<HTMLBodyElement>(null);
  const refBudget = useRef<HTMLBodyElement>(null);
  const refServices = useRef<HTMLBodyElement>(null);
  const refWhatsapp = useRef<HTMLBodyElement>(null);
  const refContato = useRef<HTMLBodyElement>(null);

  return (
    <>
      <Header logoRef={refHome} refs={{about: refAbout, budget: refBudget, services: refServices, whatsapp: refWhatsapp, contato: refContato }}/>
      <Scanner />
      <AboutUs ref={refAbout}/>
      <Budget ref={refBudget}/>
      <Services ref={refServices}/>
      <Whatsapp ref={refWhatsapp}/>
      <Footer ref={refHome}/>
      <ChatZapFixed />
      <Socials />
    </>
  );
}
