import React, { useState } from "react";
import * as styles from "./translate.module.scss";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";

const Translate = () => {
  const { languages, originalPath, language } = useI18next();
  const [activeLanguage, setActiveLanguage] = useState(language);

  const sortedLanguages = [
    ...languages.filter((lng) => lng !== activeLanguage),
    activeLanguage,
  ];

  const handleClick = (lng) => {
    setActiveLanguage(lng);
  };

  const data = useStaticQuery(graphql`
    query getFlags {
      de: file(relativePath: { eq: "germany.svg" }) {
        publicURL
      }
      en: file(relativePath: { eq: "usa.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <div className={styles.translate}>
      <ul className="languages">
        {sortedLanguages.map((lng) => (
          <li
            key={lng}
            className={lng === activeLanguage ? styles.activeLanguage : ""}
          >
            <Link
              to={originalPath}
              language={lng}
              onClick={() => handleClick(lng)}
            >
              {lng === "en" ? (
                <img src={data.en.publicURL} alt={lng} />
              ) : (
                <img src={data.de.publicURL} alt={lng} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Translate;
