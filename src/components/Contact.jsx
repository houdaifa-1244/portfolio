import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import useScrollReveal from "../Hooks/UseScrollReveal";

const Contact = () => {
  useScrollReveal();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const msg = formData.get("user_message");

    if (!name || !email || !msg) {
      toast.error("❌ All fields are required");
      return;
    }

    emailjs
      .sendForm(
        "service_po8qa6c",
        "template_j338wo1",
        form.current,
        "zj7zhlkDXFIzPV11e"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("❌ Failed to send message");
        }
      );
  };

  return (
    <section id="contact">
      <Toaster position="top-right" />

      <div className="section-tag reveal">Get In Touch</div>

      <h2 className="section-title reveal" style={{ transitionDelay: "0.1s" }}>
        Let's <span className="gradient-text">Connect</span>
      </h2>

      <div className="contact-grid">

        {/* INFO */}
        <div>

          <div className="contact-info-item reveal">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">
                hodayfamoden06@gmail.com
              </div>
            </div>
          </div>

          <div
            className="contact-info-item reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">
                +212 711931514
              </div>
            </div>
          </div>

          <div
            className="contact-info-item reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">
                Morocco 🇲🇦
              </div>
            </div>
          </div>

        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="reveal-right"
          style={{ transitionDelay: "0.15s" }}
        >

          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
            />
          </div>

          <div className="form-group">
            <textarea
              name="user_message"
              placeholder="Your message..."
            />
          </div>

          <button type="submit" className="btn-send">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;