import { useEffect, useRef, useState } from "react";

export default function TypingText({ text, speed = 30 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("");
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;

          const typing = setInterval(() => {
            setDisplay(text.slice(0, i));
            i++;

            if (i > text.length) clearInterval(typing);
          }, speed);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [text, speed]);

  return (
    <p ref={ref} className="card typing-text">
      {display}
    </p>
  );
}
