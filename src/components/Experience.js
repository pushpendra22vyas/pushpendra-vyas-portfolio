export default function Experience() {
  const experienceData = [
    {
      company: "Xpressbees (BusyBees Logistics Solutions)",
      designation: "Software Development Engineer",
      location: "Pune, Maharashtra",
      period: "Jan 2023 – Present",
      rolesAndResponsbilities: [
        "Built scalable React dashboards used across 100+ logistics centers for operations management",
        "Developed and launched 8+ new features improving operational efficiency by 25%",
        "Optimized rendering of 100,000+ records by consolidating APIs into a single table, reducing UI lag by 60%",
        "Delivered 95% sprint features on time through Agile collaboration with product and backend teams",
      ],
    },
    {
      company: "Asite Solutions Pvt. Ltd.",
      designation: "UI Developer",
      location: "Ahmedabad, Gujarat",
      period: "Feb 2022 – Dec 2022",
      rolesAndResponsbilities: [
        "Developed Common Data Environment platform using React.js and TypeScript",
        "Created 30+ reusable components reducing development effort by 35%",
        "Improved application load time by 40% through frontend performance optimizations",
        "Increased unit test coverage from 60% to 85% using Jest",
      ],
    },
    {
      company: "Kantar",
      designation: "Software Engineer",
      location: "Bangalore, Karnataka",
      period: "Feb 2021 – Aug 2022",
      rolesAndResponsbilities: [
        "Built responsive React interfaces for analytics tools used by 200+ global users",
        "Improved navigation flow and usability, reducing bounce rate by 15%",
      ],
    },
    {
      company: "Affinity Steps",
      designation: "Software Engineer Intern",
      location: "Udaipur, Rajasthan",
      period: "Feb 2021 – Sept 2021",
      rolesAndResponsbilities: [
        "Developed dynamic UI components using React.js for multiple client web applications",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 style={{ color: "var(--primary)" }}>Experience</h2>

      <div className="card company-section">
        {experienceData.map((exp, index) => (
          <div key={index}>
            <h3 className="company-name">{exp.company}</h3>

            <p className="exp-meta">
              <strong>{exp.designation}</strong> <br />
              <span>
                {exp.location} ({exp.period})
              </span>
            </p>

            <ul>
              {exp.rolesAndResponsbilities.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
