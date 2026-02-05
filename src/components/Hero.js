import ProfilePhoto from "../images/LinkedInProfilePicture.png";
import RotatingText from "./common/RotatingText";
export default function Hero() {
  const roles = [
    "React Developer",
    "Frontend Developer",
    "UI Developer",
    "JavaScript Developer",
    "Frontend Engineer",
    "Software Engineer",
  ];

  return (
    <section className="hero">
      <img src={ProfilePhoto} alt="profile" />
      <RotatingText texts={roles} />
      <a
        href="/resume.pdf"
        download="Pushpendra_Vyas_Resume.pdf"
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}
