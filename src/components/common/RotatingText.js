import { useEffect, useState } from "react";

const DEFAULT_INTERVAL = 1500;

export default function RotatingText({ texts }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 350);
    }, DEFAULT_INTERVAL);

    return () => clearTimeout(timeout);
  }, [index, texts]);

  return (
    <h1 className={`rotating-text ${fade ? "fade-in" : "fade-out"}`}>
      {texts[index]}
    </h1>
  );
}
