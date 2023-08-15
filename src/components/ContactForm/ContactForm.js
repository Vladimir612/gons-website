// import axios from "axios";
import React from "react";
import { useState } from "react";
import { validateEmail } from "./validation";
import * as styles from "./contactForm.module.scss";

import "../../globalClasses.scss";

const ContactForm = () => {
  const interests = [
    "Project outsourcing",
    "Team outsourcing",
    "Staffing",
    "General cooperation",
  ];

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    if (fullname === "" || email === "") {
      setErrorMessage("Please fill in required fileds");
      return;
    }
    if (email !== "") {
      if (!validateEmail(email)) {
        setErrorMessage("Email not valid");
        return;
      }
    }

    setSubmitted(true);

    // await axios.post(
    //   "https://appello-mailsender.vercel.app/api/email/location-checker",
    //   {
    //     formDetails: {
    //       fullname: fullname,
    //       email: email,
    //       phone: phone,
    //       company: company,
    //       stanKuca: interest,
    //     },
    //   }
    // );

    setSuccess(true);
    setErrorMessage("");
  };
  return (
    <div id="contact" className={`${styles.contactForm} padding-global`}>
      <div className={styles.dashedArrow}>
        <div className={styles.second}></div>
        <div className={styles.first}></div>
      </div>
      {success ? (
        <p className={styles.successMsg}>Successfully sent email</p>
      ) : (
        <form>
          <h3>Contact us</h3>
          <h5 style={{ marginBottom: "1rem" }}>Your contact info:</h5>
          <div className={styles.formRow} style={{ marginBottom: "1rem" }}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullname">
                Full name<span style={{ color: "#ED1B34" }}>*</span>
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">
                Email<span style={{ color: "#ED1B34" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="company">Company name</label>
              <input
                type="text"
                name="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          <h5 style={{ margin: "1rem 0" }}>Your point of interest:</h5>
          <div className={styles.formRowSecond}>
            {interests.map((i, index) => (
              <button
                className={styles.interestBtn}
                key={index}
                onClick={() => setInterest(i)}
              >
                {i}
              </button>
            ))}
          </div>

          <div className={styles.errorMessage}>
            <p>{errorMessage}</p>
          </div>
          <button
            className={styles.sendBtn}
            onClick={submitForm}
            disabled={submitted}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
