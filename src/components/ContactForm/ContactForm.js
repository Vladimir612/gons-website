import React from "react";
import { useState } from "react";
import { validateEmail } from "./validation";
import * as styles from "./contactForm.module.scss";

import "../../globalClasses.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const interests = [
    t("pointOfInterestFirst"),
    t("pointOfInterestSecond"),
    t("pointOfInterestThird"),
    t("pointOfInterestFourth"),
  ];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    if (fullName === "" || email === "" || interest === "") {
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

    await axios.post("https://gons-mailsender.vercel.app/api/application", {
      application: {
        fullName: fullName,
        email: email,
        phone: phone,
        company: company,
        interest: interest,
      },
    });

    setSuccess(true);
    setErrorMessage("");
  };

  return (
    <div id="contact" className={`${styles.contactForm} padding-global`}>
      <div className={styles.dashedArrow}>
        <div className={styles.second}></div>
        <div className={styles.first}></div>
      </div>

      <form>
        <h3>{t("contactTitle")}</h3>
        {success ? (
          <p className={styles.successMsg}>{t("successMsg")}</p>
        ) : (
          <>
            <h5 style={{ marginBottom: "1rem" }}>
              {t("contactSubheadingFirst")}
            </h5>
            <div className={styles.formRow} style={{ marginBottom: "1rem" }}>
              <div className={styles.inputGroup}>
                <label htmlFor="fullname">
                  {t("inputName")}
                  <span style={{ color: "#ED1B34" }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">
                  {t("inputEmail")}
                  <span style={{ color: "#ED1B34" }}>*</span>
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
                <label htmlFor="phone">{t("inputPhone")}</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="company">{t("inputCompany")}</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>

            <h5 style={{ margin: "1rem 0" }}>
              {t("contactSubheadingSecond")}{" "}
              <span style={{ color: "#ED1B34" }}>*</span>
            </h5>
            <div className={styles.formRowSecond}>
              {interests.map((i, index) => (
                <button
                  className={`${styles.interestBtn} ${
                    interest === i && styles.active
                  }`}
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setInterest(i);
                  }}
                >
                  {i}
                </button>
              ))}
            </div>

            <div className={styles.errorMessage}>
              <p>{errorMessage}</p>
            </div>
            <button
              className={`${styles.sendBtn} ${submitted && styles.disabled}`}
              onClick={submitForm}
              disabled={submitted}
            >
              {t("contactSend")}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
