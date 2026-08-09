import { useEffect, useState } from "react";

export function useRotatingText(
  texts: string[],
  interval = 3000,
  transitionDuration = 300,
) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);

      const changeText = setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true);
      }, transitionDuration);

      return () => clearTimeout(changeText);
    }, interval);

    return () => clearTimeout(timeout);
  }, [index, interval, transitionDuration, texts.length]);

  return { text: texts[index], visible };
}
