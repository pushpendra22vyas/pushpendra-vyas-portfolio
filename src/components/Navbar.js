import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const colors = ["#ff1a1a", "#0ea5e9", "#22c55e", "#f59e0b", "#a855f7"];
    document.documentElement.style.setProperty(
      "--primary",
      colors[Math.floor(Math.random() * colors.length)],
    );
  }, []);

  return (
    <nav>
      <div className="logo">
        <span>Pushpendra</span> <span>Vyas</span>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`links ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#experience" onClick={() => setOpen(false)}>
          Experience
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#education" onClick={() => setOpen(false)}>
          Education
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
