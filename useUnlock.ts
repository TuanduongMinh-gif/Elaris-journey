import create from 'zustand';

type UnlockState = { completed: Record<number,bool>; toggleWeek:(w:number)=>void};

export const useUnlock = create<UnlockState>((set,get)=>({
  completed: JSON.parse(localStorage.getItem('completed')||'{}'),
  toggleWeek:w=>{
    const n={...get().completed,[w]:!get().completed[w]};
    localStorage.setItem('completed',JSON.stringify(n));
    set({completed:n});
  }
}));
