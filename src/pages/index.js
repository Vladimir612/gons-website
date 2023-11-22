import * as React from "react";
import { Seo } from "./../components/seo";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import WhyUs from "../components/WhyUs/WhyUs";
import OurServices from "../components/OurServices/OurServices";
// import Experience from "../components/Experience/Experience";
import ContactForm from "../components/ContactForm/ContactForm";
import Team from "../components/Team/Team";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import Translate from "../components/SubComponents/Translate/Translate";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Hero />
      <WhyUs />
      <OurServices />
      {/* <Experience /> */}
      <Team />
      <ContactForm />
      <Translate />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export const Head = () => <Seo />;
