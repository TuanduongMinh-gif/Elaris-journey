import React,useState from 'react';
export default function NotesEditor(){
  const [note,setNote]=useState('');
  return <textarea className="w-full h-32 p-2 border" placeholder="Ghi chú..." 
    value={note} onChange={e=>setNote(e.target.value)}/>;
}
