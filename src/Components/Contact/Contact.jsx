import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { toast } from "react-toastify";
import "./Contact.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_vjqhlrq", "template_q0lhgoj", form.current, {
        publicKey: "3aYSK4ZaTUcHAGmJt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success("SUCCESS!!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error");
        }
      );
  };

  const contacts = [
    {
      icon: faLocationDot,
      description: " District 12, Ho Chi Minh City",
    },
    {
      icon: faPhone,
      description: "0357609458",
    },
    {
      icon: faEnvelope,
      description: "minhthuforwork@gmail.com",
    },
  ];

  return (
    <div className="contact" id="contact">
      <h1>Contact me</h1>
      <div className="contact-content">
        <div className="contact-left">
          {contacts.map((contact, index) => (
            <div className="contact-item" key={"contact-"+index}>
              <FontAwesomeIcon className="icon-contact" icon={contact.icon} />
              <p>{contact.description}</p>
            </div>
          ))}
        </div>
        <div className="contact-right">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your name" />
            <input type="email" name="user_email" placeholder="Your email" />
            <textarea
              name="message"
              placeholder="Typing your message here..."
            ></textarea>
            <button type="submit" value="Send">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
