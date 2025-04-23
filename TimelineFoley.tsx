import React from 'react';
import { useUnlock } from '../store/useUnlock';
const data=[...Array(12)].map((_,i)=>({week:i+1,title:`Tuần ${i+1}`,content:'...' }));
export default function TimelineFoley(){
  const {completed,toggleWeek}=useUnlock();
  return (<table><thead><tr><th>Tuần</th><th>Chủ đề</th><th>HD</th></tr></thead>
  <tbody>{data.map(w=>(
    <tr key={w.week}><td>{w.week}</td><td>{w.title}</td>
    <td><button onClick={()=>toggleWeek(w.week)}>
      {completed[w.week]?'✅':'🔒'}</button></td></tr>
  ))}</tbody></table>);
}
