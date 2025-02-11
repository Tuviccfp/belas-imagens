'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import drone from './drone2.png';
// import painel from './vista-rj.jpg';

const AnimatedComponent = () => {
  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300); // Delay para iniciar animação
    setTimeout(() => setShowText(true), 1200); // Delay para mostrar o texto
  }, []);

  return (
    <div className="relative w-full h-[250px] bg-[vista-rj.png] overflow-y-hidden flex items-center justify-center bg-black">
      <video autoPlay loop muted className='w-full h-auto'>
        <source src='teste.mp4' type='video/mp4'/>
      </video>
      {/* <Image src={painel} alt='' className='w-full'/> */}
      <div className='absolute'>
        {show && (
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-white text-4xl font-bold w-full h-[200px] flex flex-col items-center justify-center"
            >
                <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: [0, 110, -100, 5, -15, 0], y: [0, -20, -15, -5, 35, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                >
                    <Image src={drone} alt='' width={150} height={150}/>
                </motion.div>
                {showText && <p className="text-base sm:text-xl lg:text-3xl">Visto de cima tudo fica mais belo!</p>}
            </motion.div>
        )}

      </div>
    </div>
  );
};

export default AnimatedComponent;
