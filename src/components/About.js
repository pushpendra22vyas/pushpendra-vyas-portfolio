import TypingText from "./common/TypingText";

export default function About() {
  const aboutContent = `I am a passionate Frontend Developer with over four years of experience specializing in building scalable, high-performance web applications using React.js and modern JavaScript. My journey in web development has been driven by a deep interest in crafting seamless user experiences, writing clean and maintainable code, and transforming complex requirements into intuitive interfaces that users enjoy interacting with. Throughout my career, I have worked on enterprise-level applications where performance, reusability, and maintainability were critical. I have strong expertise in designing reusable component architectures, optimizing rendering performance, and implementing responsive designs that work flawlessly across devices. My focus has always been on writing code that is not only functional but also structured, readable, and easy for teams to collaborate on. I have collaborated closely with backend developers, designers, and product teams to deliver features that align with business goals while maintaining a high standard of UI/UX quality. My experience includes handling large datasets, improving application performance, reducing load times, and enhancing overall usability through thoughtful design and engineering practices. Beyond technical skills, I value continuous learning and staying updated with modern frontend trends, tools, and best practices. I enjoy solving real-world problems, refactoring legacy code into modern solutions, and contributing to projects that require both creativity and technical depth. I believe that great frontend development lies at the intersection of design, performance, and user empathy. My goal is to build applications that are not only visually appealing but also efficient, scalable, and impactful.`;

  return (
    <section id="about" className="section">
      <h2 style={{ color: "var(--primary)" }}>About Me</h2>
      <TypingText text={aboutContent} speed={10} />
    </section>
  );
}
