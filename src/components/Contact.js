import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ai8pg7",
        "template_it0tf8h",
        form.current,
        "RsHzabJPVpWFM17ek",
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="section">
      <h2 style={{ color: "var(--primary)" }}>Contact</h2>

      <div className="contact-grid">
        {/* LEFT — FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT — INFO */}
        <div className="info">
          📧 pushpendravyasr22@gmail.com <br />
          📱 +91-9950994014 <br />
          📍 Rajasthan, India
        </div>
      </div>
    </section>
  );
}

//
//
//
