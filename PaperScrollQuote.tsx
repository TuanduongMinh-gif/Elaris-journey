import React from 'react';
import { motion } from 'framer-motion';
export default function PaperScrollQuote({text}:{text:string}){
  return <motion.div className="bg-parchment p-4 border" 
    initial={{clipPath:'inset(0 100% 0 0)'}} animate={{clipPath:'inset(0 0% 0 0)'}} 
    transition={{duration:1}}>{text}</motion.div>;
}
