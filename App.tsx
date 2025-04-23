import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTimeTheme } from './hooks/useTimeTheme';
import TimelineFoley from './components/TimelineFoley';
import NotesEditor from './components/NotesEditor';
import PaperScrollQuote from './components/PaperScrollQuote';
export default function App(){
  const theme=useTimeTheme();
  return (<div className={theme==='day'?'bg-day':'bg-night'}> 
    <AnimatePresence>
      <header className="p-4 text-center"><h1 className="text-4xl font-cinzel">Les Mondes de Tuấn</h1></header>
      <main className="p-4">
        {theme==='day'?
          <PaperScrollQuote text="Morning inspiration..."/>:
          <PaperScrollQuote text="Night reflection..."/>}
        <TimelineFoley/>
        <NotesEditor/>
      </main>
    </AnimatePresence>
  </div>);
}
