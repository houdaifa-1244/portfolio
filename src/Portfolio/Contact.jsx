import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const msg = formData.get("user_message");

    // ✅ Validation
    if (!name || !email || !msg) {
      setMessage("❌ All fields are required");
      return;
    }

    // ✅ Send Email
    emailjs
      .sendForm(
        "service_po8qa6c",
        "template_j338wo1",
        form.current,
        "zj7zhlkDXFIzPV11e"
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setMessage("❌ Failed to send message");
        }
      );
  };

  return (
    <main className="main">
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>

        <div className="contact__container container grid">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form grid"
          >
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="contact__input"
            />

            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="contact__input"
            />

            <textarea
              name="user_message"
              placeholder="Message"
              className="contact__input contact__area"
            ></textarea>

            <button type="submit" className="button">
              Send Message
            </button>

            <p className="contact__message">{message}</p>
          </form>

          <div className="contact__content">
            <div className="contact__data gr">
              <address className="contact__address">
                <i className="ri-mail-fill"></i><span>hodayfamoden06@gmail.com</span>
              </address>

              <address className="contact__address">
                <i className="ri-smartphone-fill"></i><span>+212-711391514</span>
              </address>

              <address className="contact__address">
                <i className="ri-map-pin-2-fill"></i><span>Tetouan, Morocco</span>
              </address>

            </div>


          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;