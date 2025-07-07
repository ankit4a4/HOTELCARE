"use client";

import ContactForm from "../../components/contact/ContactForm.jsx";
import ContactHero from "../../components/contact/ContactHero.jsx";
import ContactInformation from "../../components/contact/ContactInformation";

export default function Contact() {
  return (
    <div className="pt-16 lg:pt-20">
      <ContactHero />
      <ContactInformation />
      <ContactForm />
    </div>
  );
}
