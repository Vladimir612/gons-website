import * as React from "react";
import { Seo } from "./../components/seo";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import WhyUs from "../components/WhyUs/WhyUs";
import OurServices from "../components/OurServices/OurServices";
import Experience from "../components/Experience/Experience";
import ContactForm from "../components/ContactForm/ContactForm";
import Team from "../components/Team/Team";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <WhyUs />
      <OurServices />
      <Experience />
      <Team />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
