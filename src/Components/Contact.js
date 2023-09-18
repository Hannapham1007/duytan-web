import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-hero-image">
          <h2 className="contact-title">Kontakta Oss</h2>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>

        <div className="info-map">
          <div className="contact-info">
            <div className="contact-phone">
              <FaPhoneAlt
                className="contact-icon"
                style={{ color: "#008144" }}
              />
              <p className="contact-text">
                <a
                  href="tel:031-220-250"
                  style={{ fontSize: "18px", color: "#222222" }}
                >
                  031-220 250
                </a>
              </p>
            </div>

            <div className="contact-adress">
              <FaMapMarkerAlt
                className="contact-icon"
                style={{ color: "#e42017" }}
              />
              <p style={{ fontSize: "18px" }} className="contact-text">
                Kvilletorget 19, 417 04 Göteborg
              </p>
            </div>
            <div className="">
              <h4 className="open-time-text" style={{ fontSize: "20px" }}>
                Öppettider
              </h4>
              <li className="open-time-content" style={{ fontSize: "18px" }}>
                {" "}
                Mån - Fre: 11:00 - 21:00
              </li>
              <li className="open-time-content" style={{ fontSize: "18px" }}>
                Lör: 12:00 - 21:00
              </li>
              <li className="open-time-content" style={{ fontSize: "18px" }}>
                Sön: Stängt
              </li>
            </div>
          </div>
          <div>
            <iframe
              className="map"
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.820183364406!2d11.948302499999986!3d57.7195121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff4a64d16c9fb%3A0xd27548ec004c48d6!2sDuy-Tan!5e0!3m2!1ssv!2sse!4v1692902064644!5m2!1ssv!2sse"
              width="600"
              height="450"
              style={{ border: "none" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
