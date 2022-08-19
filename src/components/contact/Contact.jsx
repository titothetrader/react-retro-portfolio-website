import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpwljpo",
        "template_of3bl0g",
        form.current,
        "R-NqRqppD7qUCJk6_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const onClear = (e) => {
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Please Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:hector.sanchez.johnson@gmail.com" target="_blank">
              Shoot me a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a href="https://m.me/hector.sanchezjn" target="_blank">
              Reach out via DM
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=9802429742"
              target="_blank"
            >
              Text Me Directly
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
