export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      college: "MLV Textile & Engineering College, Bhilwara",
      location: "Bhilwara, Rajasthan",
      period: "2017 – 2021",
      details: [
        "Focused on Software Engineering and Web Technologies",
        "Built multiple academic projects using JavaScript and React",
        "Actively participated in technical events and coding competitions",
      ],
    },
    {
      degree: "Senior Secondary (12th)",
      college: "Ascent international Senior secondary school, Udaipur",
      location: "Rajasthan",
      period: "2016 – 2017",
      details: ["Completed with Science stream (PCM)"],
    },
  ];

  return (
    <section id="education" className="section">
      <h2 style={{ color: "var(--primary)" }}>Education</h2>

      <div className="card company-section">
        {educationData.map((edu, index) => (
          <div key={index}>
            <h3 className="company-name">{edu.degree}</h3>

            <p className="edu-meta">
              <strong>{edu.college}</strong> <br />
              <span>{edu.period}</span>
            </p>

            <ul>
              {edu.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
