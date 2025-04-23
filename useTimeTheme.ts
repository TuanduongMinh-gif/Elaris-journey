import { useState, useEffect } from 'react';

export function useTimeTheme() {
  const [isDay, setIsDay] = useState(true);
  useEffect(() => {
    function update() {
      const h = new Date().getHours();
      setIsDay(h >= 6 && h < 18);
    }
    update();
    const iv = setInterval(update, 60000);
    return () => clearInterval(iv);
  }, []);
  return isDay ? 'day' : 'night';
}
