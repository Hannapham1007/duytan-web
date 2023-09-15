import React, { useState, setState } from "react";
import "./ContactForm.css";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";

function ContactForm() {
  const [namn, setNamn] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const [namnError, setNamnError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telephoneError, setTelephoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const isValidNamn = (namn) => {
    const namnRegex = /^[A-Za-zÀ-Öà-ö-' ]+$/;
    return namnRegex.test(namn);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  /* const isValidTelephone = (telephone) => {
       
        const telephoneRegex = /^\d{9,10}$/;
        return telephoneRegex.test(telephone);
      }; */

  const handeleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setNamn(value);
      setNamnError(false);
    }
    if (id === "email") {
      setEmail(value);
      setEmailError(false);
    }
    if (id === "telephone") {
      setTelephone(value);
      setTelephoneError(false);
    }
    if (id === "message") {
      setMessage(value);
      setMessageError(false);
    }
  };

  const resetForm = () => {
    setNamn("");
    setEmail("");
    setTelephone("");
    setMessage("");
  };

  const handleSubmit = () => {
    let hasError = false;

    if (!namn || !isValidNamn(namn)) {
      setNamnError(true);
      hasError = true;
    }
    if (!email || !isValidEmail(email)) {
      setEmailError(true);
      hasError = true;
    }
    if (!telephone) {
      setTelephoneError(true);
      hasError = true;
    }
    if (!message || message.trim().length === 0) {
      setMessageError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    alert("Tack för ditt meddelande!");
    resetForm();

    let obj = {
      namn: namn,
      email: email,
      telephone: telephone,
      message: message,
    };

    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label for = 'name'className="form-label">
            {" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={namn}
            onChange={(e) => handeleInputChange(e)}
            placeholder="Namn"
          />
          {namnError && (
            <span className="error-message">Fyll i ett giltigt namn!</span>
          )}
        </div>
        <div className="email">
          <label for='email' className="form-label">
            {" "}
          </label>
          <input
            type="email"
            name=""
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => handeleInputChange(e)}
            placeholder="E-post"
          />
          {emailError && (
            <span className="error-message">
              {" "}
              E-postadress saknas eller är inte giltig!
            </span>
          )}
        </div>

        <div className="telephone">
          <label for ='telephone'className="form-label" ></label>
          <input
            type="number"
            id="telephone"
            className="form-input"
            value={telephone}
            onChange={(e) => handeleInputChange(e)}
            placeholder="Telephone"
          />
          {telephoneError && (
            <span className="error-message">
              Telefonnummer saknas eller är inte giltigt!
            </span>
          )}
        </div>
        <div for ='message'className="message">
          <label className="form-label"></label>
          <textarea
            rows={3}
            className="form-input"
            type="message"
            id="message"
            value={message}
            onChange={(e) => handeleInputChange(e)}
            placeholder="Meddelande"
          />
          {messageError && (
            <span className="error-message">Fyll i meddelande!</span>
          )}
        </div>
      </div>
      <div className="submit-button">
        <button type="submit" className="btn" onClick={() => handleSubmit()}>
          Skicka
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
